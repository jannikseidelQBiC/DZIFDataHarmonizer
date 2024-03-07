// TODO: these images add quite a bit of weight to the final bundles. Not
// necessarily a problem for the web bundle because it is designed to be
// loaded locally, but it may cause a bit of concern for users of the
// library bundle. I wonder if this type of documentation should be
// externalized anyway to make it easier to update and customize.
import editCopyPasteDelete from './images/editCopyPasteDelete.gif';
import changeTemplate from './images/changeTemplate.gif';
import toggleRequiredCols from './images/toggleRequiredCols.gif';
import doubleClickHeaders from './images/doubleClickHeaders.gif';
import selectingVals from './images/selectingVals.gif';
import validatingCells from './images/validatingCells.gif';
import showRows from './images/showRows.gif';
import showSection from './images/showSection.gif';
import jumpToColumn from './images/jumpToColumn.gif';
import fillColumn from './images/fillColumn.gif';
import moreInfo from './images/moreInfo.gif';
import versionUpdate from './images/versionUpdate.gif';

import { renderContent } from './utils/content';

const slides = [
  {
    image: editCopyPasteDelete,
    caption: [
      `The DataHarmonizer contextual data collection template
      and validator application enables users to enter data as
      in an excel spreadsheet - type and pick values from
      dropdowns, copy/paste, add rows, etc. You can edit the cells
      manually, or upload .xlsx, .xls, .tsv, .csv and .json
      files via **File** > **Open**.`,
    ],
  },
  {
    image: changeTemplate,
    caption: [
      `To change the spreadsheet template, select the 
      white text box to the right of “Template”, it always 
      contains the name of the template currently active, or 
      navigated to “File” followed by “Change Template”. An 
      in-app window will appear that allows you to select from 
      the available templates in the drop-down menu. After 
      selecting the desired template, click **Open** to activate 
      the template`,
    ],
  },
  {
    image: toggleRequiredCols,
    caption: [
      `Fields are colour-coded; required fields (minimal
      metadata) are yellow, strongly recommended fields are
      purple, optional fields are white/gray.`,
      `You can toggle between all, the required fields, and the
      required + recommended fields by going to “Settings” and
      selecting “Show required columns”, etc.`,
    ],
  },
  {
    image: doubleClickHeaders,
    caption: [
      `Double click on field headers to see the definition of
      the field, guidance on filling in the field, and
      examples of how data might look structured according
      to the constraints of the validator.`,
    ],
  },
  {
    image: selectingVals,
    caption: [
      `Picklists of controlled vocabulary are available for
      many fields. There are dropdown menus for some, and
      multi-select options for others (e.g. Signs and
      Symptoms). You can also see the list of terms in
      multi-select columns by clicking once in the
      multi-select box.`,
    ],
  },
  {
    image: validatingCells,
    caption: [
      `When you’re done entering your data, you can validate
      values by clicking on “Validate”. Errors and missing
      information in required fields will be coloured light 
      red and dark red, respectively.`,
      `You can navigate to and between errors by clicking the
      “Next Error” button that appears when errors are
      present. After resolving these errors, revalidate to
      see if any remain. If there are no more errors the “Next
      Error” button will change to “No Errors” and fade away.`,
    ],
  },
  {
    image: showRows,
    caption: [
      `To facilitate editing data post-validation, you can
      change your view to only “Show valid rows” or only
      “Show invalid rows” by selecting these options under the
      “Settings” menu. You can select “Show all rows” to return
      to the original view.`,
    ],
  },
  {
    image: showSection,
    caption: [
      `You can quickly navigate to a section of fields by
      selecting “Settings” and then selecting one of the
      options listed under “Show section:”.`,
    ],
  },
  {
    image: jumpToColumn,
    caption: [
      `You can quickly navigate to a column by selecting
      “Settings” > “Jump to…”. An in-app window will appear,
      select the desired column header from the drop-down list
      or begin typing its name to narrow down the list options.
      Selecting the column header from the drop down list will
      immediately relocate you to that column on the spreadsheet.`,
    ],
  },
  {
    image: fillColumn,
    caption: [
      `You can also automatically fill a column with a specified 
      value, but only in rows with corresponding values in the
      first “sample ID” column. To use this feature select
      “Settings” > “Fill column...". Select the desired column
      header from the drop-down list or begin typing its name to
      narrow down the list options, then specify the value to
      fill with and click “Ok” to apply.`,
    ],
  },
  {
    image: moreInfo,
    caption: [
      `You can find more information about a template under
      the “Help” button. “Reference Guide” includes additional
      information about fields and the “SOP” (short for Standard
      Operating Procedure) contains additional information about
      curating data. For a reference guide that includes picklist
      values, please contact us.`,
    ],
  },
  {
    image: versionUpdate,
    caption: [
      `Make sure you are using the latest version of the
      DataHarmonizer (and your template). You can check your
      current Data Harmonizer Template version by looking at
      the bottom of the “Settings” menu. To update your application
      and/or template, open the “Help” menu and select “Get latest
      release”.`,
      `If you have questions, or require assistance,
      contact jannik.seidel@qbic.uni-tuebingen.de.`,
    ],
  },
];

export function getGettingStartedMarkup() {
  return `
<div
  class="carousel slide"
  id="getting-started-carousel"
  data-interval="false"
>
  <ol class="carousel-indicators">
    ${slides
      .map(
        (slide, idx) =>
          `<li
            data-target="#getting-started-carousel"
            data-slide-to="${idx}"
            ${idx === 0 ? 'class="active"' : ''}
          ></li>`
      )
      .join('')}
  </ol>
  <div class="carousel-inner">
    ${slides
      .map(
        (slide, idx) =>
          `<div class="carousel-item ${idx === 0 ? 'active' : ''}">
            <img
              class="d-block w-100"
              src="${slide.image}"
            />
            <div class="carousel-caption">
              ${slide.caption.map((p) => `<p>${renderContent(p)}</p>`).join('')}
            </div>
          </div>`
      )
      .join('')}
  </div>
  <a
    class="carousel-control-prev"
    href="#getting-started-carousel"
    role="button"
    data-slide="prev"
  >
    <span
      class="carousel-control-prev-icon"
      aria-hidden="true"
    ></span>
    <span class="sr-only">Previous</span>
  </a>
  <a
    class="carousel-control-next"
    href="#getting-started-carousel"
    role="button"
    data-slide="next"
  >
    <span
      class="carousel-control-next-icon"
      aria-hidden="true"
    ></span>
    <span class="sr-only">Next</span>
  </a>
</div>
`;
}
