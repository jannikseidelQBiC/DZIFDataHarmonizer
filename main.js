/**
 * @fileOverview Handsontable grid with standardized COVID-19 metadata.
 * Implemented with vanilla JavaScript and locally downloaded libaries.
 * Functionality for uploading, downloading and validating data.
 */

/**
 * Post-processing of values in `data.js` at runtime.
 * Currently only adds country vocabulary to all fields that need it.
 * TODO: this logic should be in the python script that creates `data.json`
 * @param {Object} data See `data.js`.
 * @return {Object} Processed values of `data.js`.
 */
const processData = (data) => {
  const fields = getFields(data);
  const countryField =
      fields.filter(field => field.fieldName === 'geo_loc_name (country)')[0];
  for (const parent of data) {
    for (const child of parent.children) {
      if (child.fieldName.includes('(country')) {
        child.vocabulary = countryField.vocabulary;
      }
    }
  }
  return data;
};

/**
 * Get a flat array of all fields in `data.json`.
 * @param {Object} data See `data.json`.
 * @return {Array<Object>} Array of all objects under `children` in `data.json`.
 */
const getFields = (data) => {
  return Array.prototype.concat.apply([], data.map(parent => parent.children));
};

/**
 * Create a blank instance of Handsontable.
 * @param {Object} data See `data.js`.
 * @return {Object} Handsontable instance.
 */
const createHot = (data) => {
  return Handsontable($('#grid')[0], {
    nestedHeaders: getNestedHeaders(DATA),
    columns: getColumns(DATA),
    colHeaders: true,
    rowHeaders: true,
    minRows: 100,
    minSpareRows: 100,
    width: '100%',
    height: '75vh',
    fixedColumnsLeft: 1,
    hiddenColumns: {
      copyPasteEnabled: true,
      indicators: true,
      columns: [],
    },
    // Handsontable's validation is extremely slow with large datasets
    invalidCellClassName: '',
    licenseKey: 'non-commercial-and-evaluation',
    afterRender: () => {
      $('#header-row').css('visibility', 'visible');
      // Bit of a hackey way to add classes to secondary headers
      $('.secondary-header-text').each((_, e) => {
        const $cellElement = $(e).closest('th');
        if ($(e).hasClass('required')) {
          $cellElement.addClass('secondary-header-cell required');
        } else if ($(e).hasClass('recommended')) {
          $cellElement.addClass('secondary-header-cell recommended');
        } else {
          $cellElement.addClass('secondary-header-cell');
        }
      });
    },
  });
};

/**
 * Create a matrix containing the nested headers supplied to Handsontable.
 * These headers are HTML strings, with useful selectors for the primary and
 * secondary header cells.
 * @param {Object} data See `data.js`.
 * @return {Array<Array>} Nested headers for Handontable grid.
 */
const getNestedHeaders = (data) => {
  const rows = [[], []];
  for (const parent of data) {
    rows[0].push({
      label: `<h5 class="pt-2 pl-1">${parent.fieldName}</h5>`,
      colspan: parent.children.length
    });
    for (const child of parent.children) {
      const req = child.requirement;
      const name = child.fieldName;
      rows[1].push(`<div class="secondary-header-text ${req}">${name}</div>`);
    }
  }
  return rows;
};

/**
 * Create a matrix containing the grid's headers. Empty strings are used to
 * indicate merged cells.
 * @param {Object} data See `data.js`.
 * @return {Array<Array<String>>} Grid headers.
 */
const getFlatHeaders = (data) => {
  const rows = [[], []];
  for (const parent of data) {
    rows[0].push(parent.fieldName);
    rows[0].push(...Array(parent.children.length - 1).fill(''));
    rows[1].push(...parent.children.map(child => child.fieldName));
  }
  return rows;
};

/**
 * Create an array of cell properties specifying data type for all grid columns.
 * AVOID EMPLOYING VALIDATION LOGIC HERE -- HANDSONTABLE'S VALIDATION
 * PERFORMANCE IS AWFUL. WE MAKE OUR OWN IN `VALIDATE_GRID`.
 * @param {Object} data See `data.js`.
 * @return {Array<Object>} Cell properties for each grid column.
 */
const getColumns = (data) => {
  let ret = [];
  for (const field of getFields(data)) {
    const col = {};
    if (field.requirement) col.requirement = field.requirement;
    if (field.datatype === 'integer' || field.datatype === 'decimal') {
      col.type = 'numeric';
    } else if (field.datatype === 'date') {
      col.type = 'date';
      col.dateFormat = 'YYYY/MM/DD';
    } else if (field.datatype === 'select') {
      col.type = 'autocomplete';
      col.source = stringifyNestedVocabulary(field.vocabulary);
    } else if (field.datatype === 'multiple') {
      col.type = 'autocomplete';
      col.source = stringifyNestedVocabulary(field.vocabulary);
    }
    ret.push(col);
  }
  return ret;
};

/**
 * Recursively flatten vocabulary into an array of strings, with each string's
 * level of depth in the vocabulary being indicated by leading spaces.
 * e.g., `vocabulary: 'a': {'b':{}},, 'c': {}` becomes `['a', '  b', 'c']`.
 * @param {Object} vocabulary See `vocabulary` fields in `data.js`.
 * @param {number} level Nested level of `vocabulary` we are currently
 *     processing.
 * @return {Array<Array<String>>} Flattened vocabulary.
 */
const stringifyNestedVocabulary = (vocabulary, level=0) => {
  if (Object.keys(vocabulary).length === 0) {
    return [];
  }

  let ret = [];
  for (const val of Object.keys(vocabulary)) {
    ret.push('  '.repeat(level) + val);
    ret = ret.concat(stringifyNestedVocabulary(vocabulary[val], level+1));
  }
  return ret;
};

/**
 * Download grid headers and data to file.
 * @param {Array<Array<String>>} matrix Grid data.
 * @param {String} baseName Basename of downloaded file.
 * @param {String} ext Extension of downloaded file.
 * @param {Object} xlsx SheetJS variable.
 */
const exportFile = (matrix, baseName, ext, xlsx) => {
  const worksheet = xlsx.utils.aoa_to_sheet(matrix);
  const workbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  if (ext === 'xlsx') {
    xlsx.writeFile(workbook, `${baseName}.xlsx`);
  } else if (ext === 'tsv') {
    xlsx.writeFile(workbook, `${baseName}.tsv`, {bookType: 'csv', FS: '\t'});
  } else if (ext === 'csv') {
    xlsx.writeFile(workbook, `${baseName}.csv`, {bookType: 'csv', FS: ','});
  }
};

/**
 * Upload user file data to grid. We are are assuming the uploaded file has the
 * same headers as our grid.
 * @param {File} file User file.
 * @param {String} ext User file extension.
 * @param {Object} hot Handsontable instance of grid.
 * @param {Object} xlsx SheetJS variable.
 */
const importFile = (file, ext, hot, xlsx) => {
  const fileReader = new FileReader();
  if (ext === 'xlsx') {
    fileReader.readAsBinaryString(file);
    fileReader.onload = (e) => {
      const workbook = xlsx.read(e.target.result, {type: 'binary'});
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const sheetCsvStr = xlsx.utils.sheet_to_csv(firstSheet);
      const matrix =
          sheetCsvStr.split('\n').map(line => line.split(',')).slice(2);
      hot.loadData(matrix);
    };
  } else if (ext === 'tsv') {
    fileReader.readAsText(file);
    fileReader.onload = (e) => {
      const matrix =
          e.target.result.split('\n').map(line => line.split('\t')).slice(2);
      hot.loadData(matrix);
    };
  } else if (ext === 'csv') {
    fileReader.readAsText(file);
    fileReader.onload = (e) => {
      const matrix =
          e.target.result.split('\n').map(line => line.split(',')).slice(2);
      hot.loadData(matrix);
    };
  }
};

/**
 * Highlight invalid cells in grid.
 * @param {Object} hot Handsontable instance of grid.
 * @param {Object} data See `data.js`.
 */
const validateGrid = (hot, data) => {
  const fields = getFields(data);
  hot.updateSettings({
    cells: function(row, col) {
      if (hot.isEmptyRow(row)) return;
      const cellVal = this.instance.getDataAtCell(row, col);
      const datatype = fields[col].datatype;
      let valid = true;

      if (!cellVal) {
        valid = !this.requirement;
      } else if (datatype === 'integer') {
        if (!Number.isInteger(cellVal)) valid = false;
      } else if (datatype === 'decimal') {
        if (isNaN(cellVal)) valid = false;
      } else if (datatype === 'date') {
        // TODO
      } else if (this.type === 'autocomplete') {
        if (!validateDropDown(cellVal, this.source)) valid = false;
      }

      return valid ? {} : {className: 'invalid-cell'};
    },
  });
  // Stop validating cells on future edits
  hot.updateSettings({cells: undefined});
};

/**
 * Validate a value against its source. This is called when when validating
 * autocomplete cells.
 * @param {String} val Cell value.
 * @param {Array<String>} source Dropdown list for cell.
 * @return {Boolean} If `val` is in `source`, while ignoring whitespace and
 *     case.
 */
const validateDropDown = (val, source) => {
  let valid = false;
  if (val) {
    const trimmedSource =
        source.map(sourceVal => sourceVal.trim().toLowerCase());
    const trimmedVal = val.trim().toLowerCase();
    if (trimmedSource.includes(trimmedVal)) valid = true;
  }
  return valid;
};

/**
 * Modify visibility of fields in grid. This function should only be called
 * after clicking a DOM element used to toggle field visibilities.
 * @param {String} id Id of element clicked to trigger this function.
 * @param {Object} data See `data.js`.
 * @param {Object} hot Handsontable instance of grid.
 */
const showFields = (id, data, hot) => {
  const hiddenColumns = [];
  if (id === 'view-required-fields') {
    getFields(data).forEach(function(field, i) {
      if (field.requirement !== 'required') hiddenColumns.push(i);
    });
  }
  hot.updateSettings({
    hiddenColumns: {
      copyPasteEnabled: true,
      indicators: true,
      columns: hiddenColumns,
    },
  });
};

/**
 * Get an HTML string that describes a field.
 * @param {Object} field Any object under `children` in `data.js`.
 * @return {String} HTML string describing field.
 */
const getComment = (field) => {
  '\nLabel: '+ field.fieldName + '\n\nDescription:' + field.description + '\n\nGuidance: ' + field.guidance + '\n\nExample: '+ field.examples
  return `<p><strong>Label</strong>: ${field.fieldName}</p>
<p><strong>Description</strong>: ${field.description}</p>
<p><strong>Guidance</strong>: ${field.guidance}</p>
<p><strong>Examples</strong>: ${field.examples}</p>`;
};

$(document).ready(() => {
  window.DATA = processData(DATA);
  window.HOT = createHot(DATA);

  // File -> New
  $('#new-dropdown-item, #clear-data-confirm-btn').click((e) => {
    if (e.target.id === 'new-dropdown-item') {
      if (HOT.countRows() - HOT.countEmptyRows()) {
        $('#clear-data-warning-modal').modal('show');
      }
    } else {
      HOT.destroy();
      window.HOT = createHot(DATA);
    }
  });

  // File -> Open
  const $fileInput = $('#open-file-input');
  $fileInput.change(() => {
    const file = $fileInput[0].files[0];
    const ext = file.name.split('.').pop();
    const acceptedExts = ['xlsx', 'tsv', 'csv'];

    if (!acceptedExts.includes(ext)) {
      const errMsg = `Only ${acceptedExts.join(', ')} files are supported`;
      $('#open-err-msg').text(errMsg);
      $('#open-error-modal').modal('show');
    } else {
      importFile(file, ext, HOT, XLSX);
    }

    // Allow consecutive uploads of the same file
    $fileInput[0].value = '';
  });

  // File -> Save
  $('#save-as-confirm-btn').click((e) => {
    try {
      const baseName = $('#base-name-save-as-input').val();
      const ext = $('#file-ext-save-as-select').val();
      const matrix = [...getFlatHeaders(DATA), ...HOT.getData()];
      exportFile(matrix, baseName, ext, XLSX);
      $('#save-as-modal').modal('hide');
    } catch (err) {
      $('#save-as-err-msg').text(err.message);
    }
  });
  // Reset save modal values when the modal is closed
  $('#save-as-modal').on('hidden.bs.modal', () => {
    $('#save-as-err-msg').text('');
    $('#base-name-save-as-input').val('');
  });

  // Validate
  $('#validate-btn').click(() => void validateGrid(HOT, DATA));

  // Show fields
  $('#view-all-fields, #view-required-fields').click(function(e) {
    showFields(e.target.id, DATA, HOT);
  });

  // Field descriptions
  $('.secondary-header-cell').dblclick((e) => {
    const innerText = e.target.innerText;
    const field =
        getFields(DATA).filter(field => field.fieldName === innerText)[0];
    $('#field-description-text').html(getComment(field));
    $('#field-description-modal').modal('show');
  });
});
