var DATA = [
  {
    "fieldName": "Database Identifiers",
    "children": [
      {
        "fieldName": "specimen collector sample ID",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "The user-defined name for the sample.",
        "guidance": "Store the collector sample ID. If this number is considered identifiable information, provide an alternative ID. Be sure to store the key that maps between the original and alternative IDs for traceability and follow up if necessary. Every collector sample ID from a single submitter must be unique. It can have any format, but we suggest that you make it concise, unique and consistent within your lab.",
        "examples": "prov_rona_99",
        "exportField": {
          "GISAID": [
            {
              "field": "Sample ID given by the sample provider"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "sample_name"
            }
          ],
          "SRA": [
            {
              "field": "sample_name"
            }
          ],
          "Genbank": [
            {
              "field": "sample_name"
            }
          ],
          "Genbank_source_modifiers": [
            {
              "field": "sequence_ID"
            }
          ]
        }
      },
      {
        "fieldName": "umbrella bioproject accession",
        "capitalize": "UPPER",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The INSDC accession number assigned to the umbrella BioProject for the Canadian SARS-CoV-2 sequencing effort.",
        "guidance": "Store the umbrella BioProject accession by selecting it from the picklist in the template. The umbrella BioProject accession will be identical for all CanCOGen submitters. Different provinces will have their own BioProjects, however these BioProjects will be linked under one umbrella BioProject.",
        "examples": "PRJNA623807",
        "vocabulary": {
          "PRJNA623807": {}
        }
      },
      {
        "fieldName": "bioproject accession",
        "capitalize": "UPPER",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The INSDC accession number of the BioProject(s) to which the BioSample belongs.",
        "guidance": "Store the BioProject accession number. BioProjects are an organizing tool that links together raw sequence data, assemblies, and their associated metadata. Each province will be assigned a different bioproject accession number by the National Microbiology Lab. A valid NCBI BioProject accession has prefix PRJN e.g., PRJNA12345, and is created once at the beginning of a new sequencing project. ",
        "examples": "PRJNA12345",
        "exportField": {
          "BIOSAMPLE": [
            {
              "field": "bioproject_accession"
            }
          ],
          "SRA": [
            {
              "field": "bioproject_accession"
            }
          ],
          "Genbank_source_modifiers": [
            {
              "field": "BioProject"
            }
          ]
        }
      },
      {
        "fieldName": "biosample accession",
        "capitalize": "UPPER",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "recommended",
        "description": "The identifier assigned to a BioSample in INSDC archives.",
        "guidance": "Store the accession returned from the BioSample submission. NCBI BioSamples will have the prefix SAMN.",
        "examples": "SAMN14180202",
        "exportField": {
          "SRA": [
            {
              "field": "biosample_accession"
            }
          ],
          "Genbank": [
            {
              "field": "biosample_accession"
            }
          ],
          "Genbank_source_modifiers": [
            {
              "field": "BioSample"
            }
          ]
        }
      },
      {
        "fieldName": "SRA accession",
        "capitalize": "UPPER",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The Sequence Read Archive (SRA) identifier linking raw read data, methodological metadata and quality control metrics submitted to the INSDC.",
        "guidance": "Store the accession assigned to the submitted \"run\". NCBI-SRA accessions start with SRR.",
        "examples": "SRR11177792"
      },
      {
        "fieldName": "GenBank/ENA/DDBJ accession",
        "capitalize": "UPPER",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The GenBank identifier assigned to the sequence in the INSDC archives.",
        "guidance": "Store the accession returned from a GenBank submission (viral genome assembly).",
        "examples": "MN908947.3"
      },
      {
        "fieldName": "GISAID accession",
        "capitalize": "UPPER",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The GISAID accession number assigned to the sequence.",
        "guidance": "Store the accession returned from the GISAID submission.",
        "examples": "EPI_ISL_123456",
        "exportField": {
          "BIOSAMPLE": [
            {
              "field": "GISAID_accession"
            }
          ],
          "Genbank_source_modifiers": [
            {
              "field": "GISAID-accesion"
            }
          ]
        }
      },
      {
        "fieldName": "GISAID virus name",
        "capitalize": "UPPER",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The user-defined GISAID virus name assigned to the sequence.",
        "guidance": "GISAID virus names should be in the format \"hCoV-19/Country/Identifier/year\".",
        "examples": "hCoV-19/Canada/prov_rona_99/2020",
        "exportField": {
          "BIOSAMPLE": [
            {
              "field": "GISAID_virus_name"
            }
          ],
          "Genbank_source_modifiers": [
            {
              "field": "GISAID-virus-name"
            }
          ]
        }
      },
      {
        "fieldName": "host specimen voucher",
        "capitalize": "UPPER",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "Identifier for the physical specimen.",
        "guidance": "Include a URI (Uniform Resource Identifier) in the form of a URL providing a direct link to the physical host specimen. If the specimen was destroyed in the process of analysis, electronic images (e-vouchers) are an adequate substitute for a physical host voucher specimen. If a URI is not available, a museum-provided globally unique identifier (GUID) can be used. If no persistent unique identifier is available, follow the INSDC guidance for populating the voucher_specimen attribute using standard triplets for institution codes (i.e., /specimen_voucher=\"[<institution-code>:[<collection-code>:]]<specimen_id>\"): http://www.insdc.org/controlled-vocabulary-specimenvoucher-qualifier",
        "examples": "URI example: http://portal.vertnet.org/o/fmnh/mammals?id=33e55cfe-330b-40d9-aaae-8d042cba7542, INSDC triplet example: UAM:Mamm:52179"
      }
    ]
  },
  {
    "fieldName": "Sample collection and processing",
    "children": [
      {
        "fieldName": "sample collected by",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "The name of the agency that collected the original sample.",
        "guidance": "The name of the sample collector should be written out in full, (with minor exceptions) and be consistent across multple submissions e.g. Public Health Agency of Canada, Public Health Ontario, BC Centre for Disease Control. The sample collector specified is at the discretion of the data provider (i.e. may be hospital, provincial public health lab, or other).",
        "examples": "Public Health Agency of Canada",
        "exportField": {
          "GISAID": [
            {
              "field": "Originating lab"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "collected_by"
            }
          ]
        }
      },
      {
        "fieldName": "sample collector contact email",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The email address of the contact responsible for follow-up regarding the sample.",
        "guidance": "The email address can represent a specific individual or lab e.g. johnnyblogs@lab.ca, or RespLab@lab.ca",
        "examples": "johnnyblogs@lab.ca"
      },
      {
        "fieldName": "sample collector contact address",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The mailing address of the agency submitting the sample.",
        "guidance": "The mailing address should be in the format: Street number and name, City, Province/Territory, Postal Code, Country",
        "examples": "655 Lab St, Vancouver, British Columbia, V5N 2A2, Canada",
        "exportField": {
          "GISAID": [
            {
              "field": "Address"
            }
          ]
        }
      },
      {
        "fieldName": "sequence submitted by",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "The name of the agency that generated the sequence.",
        "guidance": "The name of the agency should be written out in full, (with minor exceptions) and be consistent across multple submissions. If submitting specimens rather than sequencing data, please put the \"National Microbiology Laboratory (NML)\".",
        "examples": "Centers for Disease Control and Prevention",
        "exportField": {
          "GISAID": [
            {
              "field": "Submitting lab"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "sequenced_by"
            }
          ]
        },
        "vocabulary": {
          "National Microbiology Laboratory (NML)": {},
          "BCCDC Public Health Laboratory": {},
          "Alberta Precision Labs (APL)": {
            "Alberta ProvLab North (APLN)": {},
            "Alberta ProvLab South (APLS)": {}
          },
          "Public Health Ontario (PHO)": {},
          "Laboratoire de sant\u00e9 publique du Qu\u00e9bec (LSPQ)": {},
          "Saskatchewan - Roy Romanow Provincial Laboratory (RRPL)": {},
          "Manitoba Cadham Provincial Laboratory": {},
          "Nova Scotia Health Authority": {},
          "New Brunswick - Vitalit\u00e9 Health Network": {},
          "Newfoundland and Labrador - Eastern Health": {},
          "Prince Edward Island - Health PEI": {},
          "Ontario Institute for Cancer Research (OICR)": {},
          "McMaster University": {},
          "McGill University": {},
          "The Centre for Applied Genomics (TCAG)": {},
          "Sunnybrook Health Sciences Centre": {},
          "Thunder Bay Regional Health Sciences Centre": {},
          "Canadore College": {},
          "Queen\u2019s University / Kingston Health Sciences Centre": {}
        }
      },
      {
        "fieldName": "sequence submitter contact email",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The email address of the contact responsible for follow-up regarding the sequence.",
        "guidance": "The email address can represent a specific individual or lab e.g. johnnyblogs@lab.ca, or RespLab@lab.ca",
        "examples": "RespLab@lab.ca",
        "exportField": {
          "SRA": [
            {
              "field": "sequence_submitter_contact_email"
            }
          ]
        }
      },
      {
        "fieldName": "sequence submitter contact address",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The mailing address of the agency submitting the sequence.",
        "guidance": "The mailing address should be in the format: Street number and name, City, Province/Territory, Postal Code, Country",
        "examples": "123 Sunnybrooke St, Toronto, Ontario, M4P 1L6, Canada",
        "exportField": {
          "GISAID": [
            {
              "field": "Address"
            }
          ]
        }
      },
      {
        "fieldName": "sample collection date",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:date",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "The date on which the sample was collected.",
        "guidance": "Sample collection date is critical for surveillance and many types of analyses. Required granularity includes year, month and day. If this date is considered identifiable information, it is acceptable to add \"jitter\" by adding or subtracting a calendar day (acceptable by GISAID). Alternatively, \u201dreceived date\u201d may be used as a substitute. The date should be provided in ISO 8601 standard format \"YYYY-MM-DD\".",
        "examples": "2020-03-19",
        "exportField": {
          "GISAID": [
            {
              "field": "Collection date"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "collection_date"
            }
          ],
          "Genbank_source_modifiers": [
            {
              "field": "collection-date"
            }
          ]
        }
      },
      {
        "fieldName": "sample received date",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:date",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The date on which the sample was received.",
        "guidance": "ISO 8601 standard \"YYYY-MM-DD\".",
        "examples": "2020-03-20"
      },
      {
        "fieldName": "geo_loc_name (country)",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "The country where the sample was collected.",
        "guidance": "Provide the country name from the controlled vocabulary provided.",
        "examples": "South Africa",
        "exportField": {
          "GISAID": [
            {
              "field": "Location"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "geo_loc_name"
            }
          ],
          "Genbank_source_modifiers": [
            {
              "field": "country"
            }
          ]
        },
        "vocabulary": {
          "Afghanistan": {},
          "Albania": {},
          "Algeria": {},
          "American Samoa": {},
          "Andorra": {},
          "Angola": {},
          "Anguilla": {},
          "Antarctica": {},
          "Antigua and Barbuda": {},
          "Argentina": {},
          "Armenia": {},
          "Aruba": {},
          "Ashmore and Cartier Islands": {},
          "Australia": {},
          "Austria": {},
          "Azerbaijan": {},
          "Bahamas": {},
          "Bahrain": {},
          "Baker Island": {},
          "Bangladesh": {},
          "Barbados": {},
          "Bassas da India": {},
          "Belarus": {},
          "Belgium": {},
          "Belize": {},
          "Benin": {},
          "Bermuda": {},
          "Bhutan": {},
          "Bolivia": {},
          "Borneo": {},
          "Bosnia and Herzegovina": {},
          "Botswana": {},
          "Bouvet Island": {},
          "Brazil": {},
          "British Virgin Islands": {},
          "Brunei": {},
          "Bulgaria": {},
          "Burkina Faso": {},
          "Burundi": {},
          "Cambodia": {},
          "Cameroon": {},
          "Canada": {},
          "Cape Verde": {},
          "Cayman Islands": {},
          "Central African Republic": {},
          "Chad": {},
          "Chile": {},
          "China": {},
          "Christmas Island": {},
          "Clipperton Island": {},
          "Cocos Islands": {},
          "Colombia": {},
          "Comoros": {},
          "Cook Islands": {},
          "Coral Sea Islands": {},
          "Costa Rica": {},
          "Cote d'Ivoire": {},
          "Croatia": {},
          "Cuba": {},
          "Curacao": {},
          "Cyprus": {},
          "Czech Republic": {},
          "Democratic Republic of the Congo": {},
          "Denmark": {},
          "Djibouti": {},
          "Dominica": {},
          "Dominican Republic": {},
          "Ecuador": {},
          "Egypt": {},
          "El Salvador": {},
          "Equatorial Guinea": {},
          "Eritrea": {},
          "Estonia": {},
          "Eswatini": {},
          "Ethiopia": {},
          "Europa Island": {},
          "Falkland Islands (Islas Malvinas)": {},
          "Faroe Islands": {},
          "Fiji": {},
          "Finland": {},
          "France": {},
          "French Guiana": {},
          "French Polynesia": {},
          "French Southern and Antarctic Lands": {},
          "Gabon": {},
          "Gambia": {},
          "Gaza Strip": {},
          "Georgia": {},
          "Germany": {},
          "Ghana": {},
          "Gibraltar": {},
          "Glorioso Islands": {},
          "Greece": {},
          "Greenland": {},
          "Grenada": {},
          "Guadeloupe": {},
          "Guam": {},
          "Guatemala": {},
          "Guernsey": {},
          "Guinea": {},
          "Guinea-Bissau": {},
          "Guyana": {},
          "Haiti": {},
          "Heard Island and McDonald Islands": {},
          "Honduras": {},
          "Hong Kong": {},
          "Howland Island": {},
          "Hungary": {},
          "Iceland": {},
          "India": {},
          "Indonesia": {},
          "Iran": {},
          "Iraq": {},
          "Ireland": {},
          "Isle of Man": {},
          "Israel": {},
          "Italy": {},
          "Jamaica": {},
          "Jan Mayen": {},
          "Japan": {},
          "Jarvis Island": {},
          "Jersey": {},
          "Johnston Atoll": {},
          "Jordan": {},
          "Juan de Nova Island": {},
          "Kazakhstan": {},
          "Kenya": {},
          "Kerguelen Archipelago": {},
          "Kingman Reef": {},
          "Kiribati": {},
          "Kosovo": {},
          "Kuwait": {},
          "Kyrgyzstan": {},
          "Laos": {},
          "Latvia": {},
          "Lebanon": {},
          "Lesotho": {},
          "Liberia": {},
          "Libya": {},
          "Liechtenstein": {},
          "Line Islands": {},
          "Lithuania": {},
          "Luxembourg": {},
          "Macau": {},
          "Madagascar": {},
          "Malawi": {},
          "Malaysia": {},
          "Maldives": {},
          "Mali": {},
          "Malta": {},
          "Marshall Islands": {},
          "Martinique": {},
          "Mauritania": {},
          "Mauritius": {},
          "Mayotte": {},
          "Mexico": {},
          "Micronesia": {},
          "Midway Islands": {},
          "Moldova": {},
          "Monaco": {},
          "Mongolia": {},
          "Montenegro": {},
          "Montserrat": {},
          "Morocco": {},
          "Mozambique": {},
          "Myanmar": {},
          "Namibia": {},
          "Nauru": {},
          "Navassa Island": {},
          "Nepal": {},
          "Netherlands": {},
          "New Caledonia": {},
          "New Zealand": {},
          "Nicaragua": {},
          "Niger": {},
          "Nigeria": {},
          "Niue": {},
          "Norfolk Island": {},
          "North Korea": {},
          "North Macedonia": {},
          "North Sea": {},
          "Northern Mariana Islands": {},
          "Norway": {},
          "Oman": {},
          "Pakistan": {},
          "Palau": {},
          "Panama": {},
          "Papua New Guinea": {},
          "Paracel Islands": {},
          "Paraguay": {},
          "Peru": {},
          "Philippines": {},
          "Pitcairn Islands": {},
          "Poland": {},
          "Portugal": {},
          "Puerto Rico": {},
          "Qatar": {},
          "Republic of the Congo": {},
          "Reunion": {},
          "Romania": {},
          "Ross Sea": {},
          "Russia": {},
          "Rwanda": {},
          "Saint Helena": {},
          "Saint Kitts and Nevis": {},
          "Saint Lucia": {},
          "Saint Pierre and Miquelon": {},
          "Saint Martin": {},
          "Saint Vincent and the Grenadines": {},
          "Samoa": {},
          "San Marino": {},
          "Sao Tome and Principe": {},
          "Saudi Arabia": {},
          "Senegal": {},
          "Serbia": {},
          "Seychelles": {},
          "Sierra Leone": {},
          "Singapore": {},
          "Sint Maarten": {},
          "Slovakia": {},
          "Slovenia": {},
          "Solomon Islands": {},
          "Somalia": {},
          "South Africa": {},
          "South Georgia and the South Sandwich Islands": {},
          "South Korea": {},
          "South Sudan": {},
          "Spain": {},
          "Spratly Islands": {},
          "Sri Lanka": {},
          "State of Palestine": {},
          "Sudan": {},
          "Suriname": {},
          "Svalbard": {},
          "Swaziland": {},
          "Sweden": {},
          "Switzerland": {},
          "Syria": {},
          "Taiwan": {},
          "Tajikistan": {},
          "Tanzania": {},
          "Thailand": {},
          "Timor-Leste": {},
          "Togo": {},
          "Tokelau": {},
          "Tonga": {},
          "Trinidad and Tobago": {},
          "Tromelin Island": {},
          "Tunisia": {},
          "Turkey": {},
          "Turkmenistan": {},
          "Turks and Caicos Islands": {},
          "Tuvalu": {},
          "United States of America": {},
          "Uganda": {},
          "Ukraine": {},
          "United Arab Emirates": {},
          "United Kingdom": {},
          "Uruguay": {},
          "Uzbekistan": {},
          "Vanuatu": {},
          "Venezuela": {},
          "Viet Nam": {},
          "Virgin Islands": {},
          "Wake Island": {},
          "Wallis and Futuna": {},
          "West Bank": {},
          "Western Sahara": {},
          "Yemen": {},
          "Zambia": {},
          "Zimbabwe": {}
        }
      },
      {
        "fieldName": "geo_loc_name (state/province/territory)",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "The province/territory where the sample was collected.",
        "guidance": "Provide the province/territory name from the controlled vocabulary provided.",
        "examples": "Western Cape",
        "exportField": {
          "BIOSAMPLE": [
            {
              "field": "geo_loc_name"
            }
          ]
        }
      },
      {
        "fieldName": "geo_loc name (county/region)",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The county/region of origin of the sample.",
        "guidance": "Provide the county/region name from the GAZ geography ontology. Search for geography terms here: https://www.ebi.ac.uk/ols/ontologies/gaz",
        "examples": "Derbyshire"
      },
      {
        "fieldName": "geo_loc_name (city)",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The city where the sample was collected.",
        "guidance": "Provide the city name. Use this look-up service to identify the standardized term: https://www.ebi.ac.uk/ols/ontologies/gaz",
        "examples": "Vancouver"
      },
      {
        "fieldName": "geo_loc latitude",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The latitude coordinates of the geographical location of sample collection.",
        "guidance": "Provide latitude coordinates if available. Do not use the centre of the city/region/province/state/country or the location of your agency as a proxy, as this implicates a real location and is misleading. Specify as degrees latitude in format \"d[d.dddd] N|S\".",
        "examples": "38.98 N",
        "exportField": {
          "BIOSAMPLE": [
            {
              "field": "lat_lon"
            }
          ]
        }
      },
      {
        "fieldName": "geo_loc longitude",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The longitude coordinates of the geographical location of sample collection.",
        "guidance": "Provide longitude coordinates if available. Do not use the centre of the city/region/province/state/country or the location of your agency as a proxy, as this implicates a real location and is misleading. Specify as degrees longitude in format \"d[dd.dddd] W|E\".",
        "examples": "77.11 W",
        "exportField": {
          "BIOSAMPLE": [
            {
              "field": "lat_lon"
            }
          ]
        }
      },
      {
        "fieldName": "organism",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "Taxonomic name of the organism.",
        "guidance": "Use \"Severe acute respiratory syndrome coronavirus 2\". This value is provided in the template.",
        "examples": "Severe acute respiratory syndrome coronavirus 2",
        "exportField": {
          "BIOSAMPLE": [
            {
              "field": "organism"
            }
          ]
        },
        "vocabulary": {
          "Severe acute respiratory syndrome coronavirus 2": {},
          "RaTG13": {},
          "RmYN02": {}
        }
      },
      {
        "fieldName": "isolate",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "Identifier of the specific isolate.",
        "guidance": "This identifier should be an unique, indexed, alpha-numeric ID within your laboratory. If submitted to the INSDC, the \"isolate\" name is propagated throughtout different databases. As such, structure the \"isolate\" name to be ICTV/INSDC compliant in the following format: \"SARS-CoV-2/host/country/sampleID/date\".",
        "examples": "SARS-CoV-2/human/USA/CA-CDPH-001/2020",
        "exportField": {
          "GISAID": [
            {
              "field": "Virus name"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "isolate"
            }
          ],
          "Genbank_source_modifiers": [
            {
              "field": "isolate"
            }
          ]
        }
      },
      {
        "fieldName": "culture collection",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The name of the source collection and unique culture identifier. ",
        "guidance": "Format: \"<institution-code>:[<collection-code>:]<culture_id>\". For more information, see http://www.insdc.org/controlled-vocabulary-culturecollection-qualifier.",
        "examples": "/culture_collection=\"ATCC:26370\""
      },
      {
        "fieldName": "purpose of sampling",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "recommended",
        "description": "The reason that the sample was collected.",
        "guidance": "The reason a sample was collected may provide information about potential biases in sampling strategy. Provide the purpose of sampling from the picklist in the template. Most likely, the sample was collected for Diagnostic testing. The reason why a sample was originally collected may differ from the reason why it was selected for sequencing, which should be indicated in the \"purpose of sequencing\" field. ",
        "examples": "Diagnostic testing",
        "exportField": {
          "BIOSAMPLE": [
            {
              "field": "purpose_of_sampling"
            }
          ]
        },
        "vocabulary": {
          "Cluster/Outbreak investigation": {},
          "Diagnostic testing": {},
          "Research": {},
          "Surveillance": {}
        }
      },
      {
        "fieldName": "purpose of sampling details",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The description of why the sample was collected, providing specific details.",
        "guidance": "Provide an expanded description of why the sample was collected using free text. The description may include the importance of the sample for a particular public health investigation/surveillance activity/research question. If details are not available, provide a null value.",
        "examples": "Screening of bat specimens in museum collections."
      },
      {
        "fieldName": "sample plan name",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The name of the sample plan implemented for sample collection.",
        "guidance": "Provide the name and version of the sample plan outlining the sample strategy.",
        "examples": "CanCOGeN Sampling Strategy 1.0"
      },
      {
        "fieldName": "sample collected in quarantine",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "Whether the sample was collected from an individual in quarantine.",
        "guidance": "Whether a sample was collected under quarantine conditions (e.g. self-quarantining, medically isolated, staying at a quarantine hotel) can inform public health measure assessments. Use the picklist provided in the template.",
        "examples": "Yes",
        "vocabulary": {
          "Yes": {},
          "No": {},
          "Unknown": {}
        }
      },
      {
        "fieldName": "anatomical material",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "A substance obtained from an anatomical part of an organism e.g. tissue, blood.",
        "guidance": "Provide a descriptor if an anatomical material was sampled. Use the picklist provided in the template. If a desired term is missing from the picklist, contact emma.griffiths@bccdc.ca. If not applicable, do not leave blank. Choose a null value. ",
        "examples": "Blood",
        "exportField": {
          "GISAID": [
            {
              "field": "Specimen source"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "isolation_source|anatomical_material"
            }
          ]
        },
        "vocabulary": {
          "Blood": {},
          "Fluid": {
            "Saliva": {},
            "Fluid (cerebrospinal (CSF))": {},
            "Fluid (pericardial)": {},
            "Fluid (pleural)": {},
            "Fluid (vaginal)": {},
            "Fluid (amniotic)": {}
          },
          "Tissue": {}
        }
      },
      {
        "fieldName": "anatomical part",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "An anatomical part of an organism e.g. oropharynx.",
        "guidance": "Provide a descriptor if an anatomical part was sampled. Use the picklist provided in the template. If a desired term is missing from the picklist, contact emma.griffiths@bccdc.ca. If not applicable, do not leave blank. Choose a null value. ",
        "examples": "Nasopharynx",
        "exportField": {
          "GISAID": [
            {
              "field": "Specimen source"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "isolation_source|anatomical_part"
            }
          ]
        },
        "vocabulary": {
          "Anus": {},
          "Buccal mucosa": {},
          "Duodenum": {},
          "Eye": {},
          "Intestine": {},
          "Rectum": {},
          "Skin": {},
          "Stomach": {},
          "Upper respiratory tract": {
            "Anterior Nares": {},
            "Esophagus": {},
            "Ethmoid sinus": {},
            "Nasal Cavity": {
              "Middle Nasal Turbinate": {},
              "Inferior Nasal Turbinate": {}
            },
            "Nasopharynx (NP)": {},
            "Oropharynx (OP)": {}
          },
          "Lower respiratory tract": {
            "Bronchus": {},
            "Lung": {
              "Bronchiole": {},
              "Alveolar sac": {}
            },
            "Pleural sac": {
              "Pleural cavity": {}
            },
            "Trachea": {}
          }
        }
      },
      {
        "fieldName": "body product",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "A substance excreted/secreted from an organism e.g. feces, urine, sweat.",
        "guidance": "Provide a descriptor if a body product was sampled. Use the picklist provided in the template.  If a desired term is missing from the picklist, contact emma.griffiths@bccdc.ca. If not applicable, do not leave blank. Choose a null value. ",
        "examples": "Feces",
        "exportField": {
          "GISAID": [
            {
              "field": "Specimen source"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "isolation_source|body_product"
            }
          ]
        },
        "vocabulary": {
          "Feces": {},
          "Urine": {},
          "Sweat": {},
          "Mucus": {
            "Sputum": {}
          },
          "Tear": {},
          "Fluid (seminal)": {},
          "Breast Milk": {}
        }
      },
      {
        "fieldName": "environmental material",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "A substance obtained from the natural or man-made environment e.g. soil, water, sewage.",
        "guidance": "Provide a descriptor if an environmental material was sampled. Use the picklist provided in the template.  If a desired term is missing from the picklist, contact emma.griffiths@bccdc.ca. If not applicable, do not leave blank. Choose a null value. ",
        "examples": "Face mask",
        "exportField": {
          "GISAID": [
            {
              "field": "Specimen source"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "isolation_source|environmental_material"
            }
          ]
        },
        "vocabulary": {
          "Air vent": {},
          "Banknote": {},
          "Bed rail": {},
          "Building floor": {},
          "Cloth": {},
          "Control panel": {},
          "Door": {},
          "Door handle": {},
          "Face mask": {},
          "Face shield": {},
          "Food": {},
          "Food packaging": {},
          "Glass": {},
          "Handrail": {},
          "Hospital gown": {},
          "Light switch": {},
          "Locker": {},
          "N95 mask": {},
          "Nurse call button": {},
          "Paper": {},
          "Particulate matter": {},
          "Plastic": {},
          "PPE gown": {},
          "Sewage": {},
          "Sink": {},
          "Soil": {},
          "Stainless steel": {},
          "Tissue paper": {},
          "Toilet bowl": {},
          "Water": {},
          "Wastewater": {},
          "Window": {},
          "Wood": {}
        }
      },
      {
        "fieldName": "environmental site",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "An environmental location may describe a site in the natural or built environment e.g. contact surface, metal can, hospital, wet market, bat cave.",
        "guidance": "Provide a descriptor if an environmental site was sampled. Use the picklist provided in the template.  If a desired term is missing from the picklist, contact emma.griffiths@bccdc.ca. If not applicable, do not leave blank. Choose a null value. ",
        "examples": "Hospital room",
        "exportField": {
          "GISAID": [
            {
              "field": "Specimen source"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "isolation_source|environmental_site"
            }
          ]
        },
        "vocabulary": {
          "Acute care facility": {},
          "Animal house": {},
          "Bathroom": {},
          "Clinical assessment centre": {},
          "Conference venue": {},
          "Corridor": {},
          "Daycare": {},
          "Emergency room (ER)": {},
          "Family practice clinic": {},
          "Group home": {},
          "Homeless shelter": {},
          "Hospital": {},
          "Intensive Care Unit (ICU)": {},
          "Long Term Care Facility": {},
          "Patient room": {},
          "Prison": {},
          "Production Facility": {},
          "School": {},
          "Sewage Plant": {},
          "Subway train": {},
          "Wet market": {}
        }
      },
      {
        "fieldName": "collection device",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The instrument or container used to collect the sample e.g. swab.",
        "guidance": "Provide a descriptor if a device was used for sampling. Use the picklist provided in the template. If a desired term is missing from the picklist, contact emma.griffiths@bccdc.ca. If not applicable, do not leave blank. Choose a null value. ",
        "examples": "Swab",
        "exportField": {
          "GISAID": [
            {
              "field": "Specimen source"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "isolation_source|collection_device"
            }
          ]
        },
        "vocabulary": {
          "Air filter": {},
          "Blood Collection Tube": {},
          "Bronchoscope": {},
          "Collection Container": {},
          "Collection Cup": {},
          "Fibrobronchoscope Brush": {},
          "Filter": {},
          "Fine Needle": {},
          "Microcapillary tube": {},
          "Micropipette": {},
          "Needle": {},
          "Serum Collection Tube": {},
          "Sputum Collection Tube": {},
          "Suction Catheter": {},
          "Swab": {},
          "Urine Collection Tube": {},
          "Virus Transport Medium": {}
        }
      },
      {
        "fieldName": "collection method",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The process used to collect the sample e.g. phlebotamy, necropsy.",
        "guidance": "Provide a descriptor if a collection method was used for sampling. Use the picklist provided in the template.  If a desired term is missing from the picklist, contact emma.griffiths@bccdc.ca. If not applicable, do not leave blank. Choose a null value. ",
        "examples": "Bronchoalveolar lavage (BAL)",
        "exportField": {
          "GISAID": [
            {
              "field": "Specimen source"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "isolation_source|collection_method"
            }
          ]
        },
        "vocabulary": {
          "Amniocentesis": {},
          "Aspiration": {
            "Suprapubic Aspiration": {},
            "Tracheal aspiration": {},
            "Vacuum Aspiration": {}
          },
          "Biopsy": {
            "Needle Biopsy": {}
          },
          "Filtration": {
            "Air filtration": {}
          },
          "Lavage": {
            "Bronchoalveolar lavage (BAL)": {},
            "Gastric Lavage": {}
          },
          "Lumbar Puncture": {},
          "Necropsy": {},
          "Phlebotomy": {},
          "Rinsing": {
            "Saline gargle (mouth rinse and gargle)": {}
          },
          "Scraping": {},
          "Swabbing": {
            "Finger Prick": {}
          },
          "Wash": {},
          "Washout Tear Collection": {}
        }
      },
      {
        "fieldName": "collection protocol",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The name and version of a particular protocol used for sampling.",
        "guidance": "Free text.",
        "examples": "SC2SamplingProtocol 1.2"
      },
      {
        "fieldName": "specimen processing",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "multiple",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "recommended",
        "description": "Any processing applied to the sample during or after receiving the sample.",
        "guidance": "Critical for interpreting data. Select all the applicable processes from the pick list. If virus was passaged, include information in \"lab host\", \"passage number\", and \"passage method\" fields. If none of the processes in the pick list apply, put \"not applicable\".",
        "examples": "Virus passage",
        "exportField": {
          "GISAID": [
            {
              "field": "Passage details/history"
            }
          ]
        },
        "vocabulary": {
          "Virus passage": {},
          "RNA re-extraction (post RT-PCR)": {},
          "Specimens pooled": {}
        }
      },
      {
        "fieldName": "lab host",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "Name and description of the laboratory host used to propagate the source organism or material from which the sample was obtained.",
        "guidance": "Type of cell line used for propagation. Provide the name of the cell line using the picklist in the template. If not passaged, put \"not applicable\".",
        "examples": "Vero E6 cell line",
        "exportField": {
          "GISAID": [
            {
              "field": "Passage details/history"
            }
          ]
        },
        "vocabulary": {
          "293/ACE2 cell line": {},
          "Caco2 cell line": {},
          "Calu3 cell line": {},
          "EFK3B cell line": {},
          "HEK293T cell line": {},
          "HRCE cell line": {},
          "Huh7 cell line": {},
          "LLCMk2 cell line": {},
          "MDBK cell line": {},
          "Mv1Lu cell line": {},
          "NHBE cell line": {},
          "PK-15 cell line": {},
          "RK-13 cell line": {},
          "U251 cell line": {},
          "Vero cell line": {},
          "Vero E6 cell line": {},
          "VeroE6/TMPRSS2 cell line": {}
        }
      },
      {
        "fieldName": "passage number",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:nonNegativeInteger",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "Number of passages.",
        "guidance": "Provide number of known passages. If not passaged, put \"not applicable\"",
        "examples": "3",
        "exportField": {
          "GISAID": [
            {
              "field": "Passage details/history"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "passage_number"
            }
          ]
        }
      },
      {
        "fieldName": "passage method",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "Description of how organism was passaged.",
        "guidance": "Free text. Provide a very short description (<10 words). If not passaged, put \"not applicable\".",
        "examples": "AVL buffer+30%EtOH lysate received from Respiratory Lab. P3 passage in Vero-1 via bioreactor large-scale batch passage. P3 batch derived from the SP-2/reference lab strain.",
        "exportField": {
          "GISAID": [
            {
              "field": "Passage details/history"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "passage_method"
            }
          ]
        }
      },
      {
        "fieldName": "biomaterial extracted",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The biomaterial extracted from samples for the purpose of sequencing.",
        "guidance": "Provide the biomaterial extracted from the picklist in the template.",
        "examples": "RNA (total)",
        "vocabulary": {
          "RNA (total)": {},
          "RNA (poly-A)": {},
          "RNA (ribo-depleted)": {},
          "mRNA (messenger RNA)": {},
          "mRNA (cDNA)": {}
        }
      },
      {
        "fieldName": "data abstraction details",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "A description of how any data elements were altered to preserve patient privacy.",
        "guidance": "If applicable, provide a description of how each data element was abstracted. ",
        "examples": "Jitter added to publicly shared collection dates to prevent re-identifiability."
      }
    ]
  },
  {
    "fieldName": "Host Information",
    "children": [
      {
        "fieldName": "host (common name)",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The commonly used name of the host.",
        "guidance": "Common name or scientific name are required if there was a host. Both can be provided, if known. Use terms from the pick lists in the template. Common name e.g. human, bat. If the sample was environmental, put \"not applicable.",
        "examples": "Human",
        "vocabulary": {
          "Human": {},
          "Bat": {},
          "Cat": {},
          "Chicken": {},
          "Civets": {},
          "Cow": {},
          "Dog": {},
          "Lion": {},
          "Mink": {},
          "Pangolin": {},
          "Pig": {},
          "Pigeon": {},
          "Tiger": {}
        }
      },
      {
        "fieldName": "host (scientific name)",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "The taxonomic, or scientific name of the host.",
        "guidance": "Common name or scientific name are required if there was a host. Both can be provided, if known. Use terms from the pick lists in the template. Scientific name e.g. Homo sapiens, If the sample was environmental, put \"not applicable",
        "examples": "Homo sapiens",
        "exportField": {
          "GISAID": [
            {
              "field": "Host"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "host"
            }
          ]
        },
        "vocabulary": {
          "Homo sapiens": {},
          "Bos taurus": {},
          "Canis lupus familiaris": {},
          "Chiroptera": {},
          "Columbidae": {},
          "Felis catus": {},
          "Gallus gallus": {},
          "Manis": {},
          "Manis javanica": {},
          "Neovison vison": {},
          "Panthera leo": {},
          "Panthera tigris": {},
          "Rhinolophidae": {},
          "Rhinolophus affinis": {},
          "Sus scrofa domesticus": {},
          "Viverridae": {}
        }
      },
      {
        "fieldName": "host health state",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "Health status of the host at the time of sample collection.",
        "guidance": "If known, select a descriptor from the pick list provided in the template.",
        "examples": "Asymptomatic",
        "exportField": {
          "GISAID": [
            {
              "field": "Patient status"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "host_health_state"
            }
          ]
        },
        "vocabulary": {
          "Asymptomatic": {},
          "Deceased": {},
          "Healthy": {},
          "Recovered": {},
          "Symptomatic": {}
        }
      },
      {
        "fieldName": "host health status details",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "Further details pertaining to the health or disease status of the host at time of collection.",
        "guidance": "If known, select a descriptor from the pick list provided in the template.",
        "examples": "Hospitalized (ICU)",
        "vocabulary": {
          "Hospitalized": {
            "Hospitalized (Non-ICU)": {},
            "Hospitalized (ICU)": {}
          },
          "Mechanical Ventilation": {},
          "Medically Isolated": {
            "Medically Isolated (Negative Pressure)": {}
          },
          "Self-quarantining": {}
        }
      },
      {
        "fieldName": "host disease",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "The name of the disease experienced by the host.",
        "guidance": "Select \"COVID-19\" from the pick list provided in the template.",
        "examples": "COVID-19",
        "exportField": {
          "BIOSAMPLE": [
            {
              "field": "host_disease"
            }
          ]
        },
        "vocabulary": {
          "COVID-19": {}
        }
      },
      {
        "fieldName": "host health outcome",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "Disease outcome in the host.",
        "guidance": "If known, select a descriptor from the pick list provided in the template.",
        "examples": "Recovered",
        "exportField": {
          "BIOSAMPLE": [
            {
              "field": "host_disease_outcome"
            }
          ]
        },
        "vocabulary": {
          "Deceased": {},
          "Deteriorating": {},
          "Recovered": {},
          "Stable": {}
        }
      },
      {
        "fieldName": "host age",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:decimal",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "0",
        "xs:maxInclusive": "130",
        "requirement": "recommended",
        "description": "Age of host at the time of sampling.",
        "guidance": "Enter the age of the host in years. If not available, provide a null value. If there is not host, put \"Not Applicable\".",
        "examples": "79",
        "exportField": {
          "GISAID": [
            {
              "field": "Patient age"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "host_age"
            }
          ]
        }
      },
      {
        "fieldName": "host age unit",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "recommended",
        "description": "The unit used to measure the host age, in either months or years.",
        "guidance": "Indicate whether the host age is in months or years. Age indicated in months will be binned to the 0 - 9 year age bin. ",
        "examples": "years",
        "vocabulary": {
          "month": {},
          "year": {}
        }
      },
      {
        "fieldName": "host age bin",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "recommended",
        "description": "Age of host at the time of sampling, expressed as an age group.",
        "guidance": "Select the corresponding host age bin from the pick list provided in the template. If not available, provide a null value.",
        "examples": "",
        "vocabulary": {
          "0 - 9": {},
          "10 - 19": {},
          "20 - 29": {},
          "30 - 39": {},
          "40 - 49": {},
          "50 - 59": {},
          "60 - 69": {},
          "70 - 79": {},
          "80 - 89": {},
          "90 - 99": {},
          "100+": {}
        }
      },
      {
        "fieldName": "host gender",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "recommended",
        "description": "The gender of the host at the time of sample collection.",
        "guidance": "Select the corresponding host gender from the pick list provided in the template. If not available, provide a null value. If there is no host, put \"Not Applicable\".",
        "examples": "male",
        "exportField": {
          "GISAID": [
            {
              "field": "Gender"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "host_sex"
            }
          ]
        },
        "vocabulary": {
          "Female": {},
          "Male": {},
          "Non-binary gender": {},
          "Transgender (Male to Female)": {},
          "Transgender (Female to Male)": {},
          "Undeclared": {},
          "Unknown": {}
        }
      },
      {
        "fieldName": "host residence geo_loc name (country)",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "geo_loc_name (country)",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The country of residence of the host.",
        "guidance": "Select the country name from pick list provided in the template.",
        "examples": "Canada",
        "vocabulary": {}
      },
      {
        "fieldName": "host ethnicity",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The self-identified ethnicity(ies) of the host.",
        "guidance": "If known, provide the self-identified ethnicity or ethnicities of the host as a free text description. This is highly sensitive information which must be treated respectfully and carefully when sharing. The information may have implications for equitable access and benefit sharing. Consult your privacy officer, data steward and/or cultural services representative.",
        "examples": "Indigenous, European"
      },
      {
        "fieldName": "host subject ID",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "A unique identifier by which each host can be referred to e.g. #131",
        "guidance": "Provide the host identifier. Should be a unique, user-defined identifier.",
        "examples": "BCxy123",
        "exportField": {
          "BIOSAMPLE": [
            {
              "field": "host_subject_id"
            }
          ]
        }
      },
      {
        "fieldName": "symptom onset date",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:date",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The date on which the symptoms began or were first noted.",
        "guidance": "ISO 8601 standard \"YYYY-MM-DD\".",
        "examples": "16-03-2020"
      },
      {
        "fieldName": "signs and symptoms",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "multiple",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "A perceived change in function or sensation, (loss, disturbance or appearance) indicative of a disease, reported by a patient or clinician.",
        "guidance": "Select all of the symptoms experienced by the host from the pick list.",
        "examples": "Cough, Fever, Chills",
        "vocabulary": {
          "Abnormal lung auscultation": {},
          "Abnormality of taste sensation": {
            "Ageusia (complete loss of taste)": {},
            "Parageusia (distorted sense of taste)": {},
            "Hypogeusia (reduced sense of taste)": {}
          },
          "Abnormality of the sense of smell": {
            "Anosmia (lost sense of smell)": {},
            "Hyposmia (reduced sense of smell)": {}
          },
          "Acute Respiratory Distress Syndrome": {},
          "Altered mental status": {
            "Cognitive impairment": {},
            "Coma": {},
            "Confusion": {
              "Delirium (sudden severe confusion)": {}
            },
            "Inability to arouse (inability to stay awake)": {},
            "Irritability": {},
            "Loss of speech": {}
          },
          "Arrhythmia": {},
          "Asthenia (generalized weakness)": {},
          "Chest tightness or pressure": {
            "Rigors (fever shakes)": {}
          },
          "Chills (sudden cold sensation)": {},
          "Conjunctival injection": {},
          "Conjunctivitis (pink eye)": {},
          "Coryza": {},
          "Cough": {
            "Nonproductive cough (dry cough)": {},
            "Productive cough (wet cough)": {}
          },
          "Cyanosis (blueish skin discolouration)": {
            "Acrocyanosis": {
              "Circumoral cyanosis (bluish around mouth)": {},
              "Cyanotic face (bluish face)": {}
            },
            "Central Cyanosis": {
              "Cyanotic lips (bluish lips)": {}
            },
            "Peripheral Cyanosis": {}
          },
          "Dyspnea (breathing difficulty)": {},
          "Diarrhea (watery stool)": {},
          "Dry gangrene": {},
          "Encephalitis (brain inflammation)": {},
          "Encephalopathy": {},
          "Fatigue (tiredness)": {},
          "Fever": {
            "Fever (>=38\u00b0C)": {}
          },
          "Glossitis (inflammation of the tongue)": {},
          "Ground Glass Opacities (GGO)": {},
          "Headache": {},
          "Hemoptysis (coughing up blood)": {},
          "Hypocapnia": {},
          "Hypotension (low blood pressure)": {},
          "Hypoxemia (low blood oxygen)": {
            "Silent hypoxemia": {}
          },
          "Internal hemorrhage (internal bleeding)": {},
          "Loss of Fine Movements": {},
          "Low appetite": {},
          "Malaise (general discomfort/unease)": {},
          "Meningismus/nuchal rigidity": {},
          "Muscle weakness": {},
          "Nasal obstruction (stuffy nose)": {},
          "Nausea": {},
          "nose bleed": {},
          "otitis": {},
          "Pain": {
            "Abdominal pain": {},
            "Arthralgia (painful joints)": {},
            "Chest pain": {
              "Pleuritic chest pain": {}
            },
            "Myalgia (muscle pain)": {}
          },
          "Pharyngitis (sore throat)": {},
          "Pharyngeal exudate": {},
          "Pleural effusion": {},
          "Pneumonia": {},
          "Prostration": {},
          "Pseudo-chilblains": {
            "Pseudo-chilblains on fingers (covid fingers)": {},
            "Pseudo-chilblains on toes (covid toes)": {}
          },
          "Rash": {},
          "Rhinorrhea (runny nose)": {},
          "Seizure": {
            "Motor seizure": {}
          },
          "Shivering (involuntary muscle twitching)": {},
          "Slurred speech": {},
          "Sneezing": {},
          "Sputum Production": {},
          "Stroke": {},
          "Swollen Lymph Nodes": {},
          "Tachypnea (accelerated respiratory rate)": {},
          "Vertigo (dizziness)": {},
          "Vomiting (throwing up)": {}
        }
      },
      {
        "fieldName": "pre-existing conditions and risk factors",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "multiple",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "Patient pre-existing conditions and risk factors.\nPre-existing condition: A medical condition that existed prior to the current infection.\nRisk Factor: A variable associated with an increased risk of disease or infection.",
        "guidance": "Select all of the pre-existing conditions and risk factors experienced by the host from the pick list. If the desired term is missing, contact the curation team.",
        "examples": "Asthma",
        "vocabulary": {
          "Age 60+": {},
          "Anemia": {},
          "Anorexia": {},
          "Birthing labor": {},
          "Bone marrow failure": {},
          "Cancer": {
            "Breast cancer": {},
            "Colorectal cancer": {},
            "Hematologic malignancy": {},
            "Lung cancer": {},
            "Metastatic disease": {}
          },
          "Cancer treatment": {
            "Cancer surgery": {},
            "Chemotherapy": {
              "Adjuvant chemotherapy": {}
            }
          },
          "Cardiac disorder": {
            "Arrhythmia": {},
            "Cardiac disease": {},
            "Cardiomyopathy": {},
            "Cardiac injury": {},
            "Hypertension (high blood pressure)": {},
            "Hypotension (low blood pressure)": {}
          },
          "Cesarean section": {},
          "Chronic cough": {},
          "Chronic gastrointestinal disease": {},
          "Chronic lung disease": {},
          "Corticosteroids": {},
          "Diabetes mellitus (diabetes)": {
            "Type I diabetes mellitus (T1D)": {},
            "Type II diabetes mellitus (T2D)": {}
          },
          "Eczema": {},
          "Electrolyte disturbance": {
            "Hypocalcemia": {},
            "Hypokalemia": {},
            "Hypomagnesemia": {}
          },
          "Encephalitis (brain inflammation)": {},
          "Epilepsy": {},
          "Hemodialysis": {},
          "Hemoglobinopathy": {},
          "Human immunodeficiency virus (HIV)": {
            "Acquired immunodeficiency syndrome (AIDS)": {},
            "HIV and antiretroviral therapy (ART)": {}
          },
          "Immunocompromised": {
            "Lupus": {}
          },
          "Inflammatory bowel disease (IBD)": {
            "Colitis": {
              "Ulcerative colitis": {}
            },
            "Crohn's disease": {}
          },
          "Renal disorder": {
            "Renal disease": {},
            "Chronic renal disease": {},
            "Renal failure": {}
          },
          "Liver disease": {
            "Chronic liver disease": {
              "Fatty liver disease (FLD)": {}
            }
          },
          "Myalgia (muscle pain)": {},
          "Myalgic encephalomyelitis (ME)": {},
          "Neurological disorder": {
            "Neuromuscular disorder": {}
          },
          "Obesity": {
            "Severe obesity": {}
          },
          "Respiratory disorder": {
            "Asthma": {},
            "Chronic bronchitis": {},
            "Chronic pulmonary disease": {
              "Chronic obstructive pulmonary disease": {}
            },
            "Emphysema": {},
            "Lung disease": {
              "Chronic lung disease": {},
              "Pulmonary fibrosis": {}
            },
            "Pneumonia": {},
            "Respiratory failure": {
              "Adult respiratory distress syndrome": {},
              "Newborn respiratory distress syndrome": {}
            },
            "Tuberculosis": {}
          },
          "Postpartum (\u22646 weeks)": {},
          "Pregnancy": {},
          "Rheumatic disease": {},
          "Sickle cell disease": {},
          "Substance use": {
            "Alcohol abuse": {},
            "Drug abuse": {
              "Injection drug abuse": {}
            },
            "Smoking": {},
            "Vaping": {}
          },
          "Tachypnea (accelerated respiratory rate)": {},
          "Transplant": {
            "Bone marrow transplant": {},
            "Cardiac transplant": {},
            "Hematopoietic stem cell transplant (HSCT)": {},
            "Kidney transplant": {},
            "Liver transplant": {}
          }
        }
      },
      {
        "fieldName": "complications",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "multiple",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "Patient medical complications that are believed to have occurred as a result of host disease.",
        "guidance": "Select all of the complications experienced by the host from the pick list. If the desired term is missing, contact the curation team.",
        "examples": "Acute Respiratory Failure",
        "vocabulary": {
          "Abnormal blood oxygen level": {},
          "Acute respiratory failure": {},
          "Arrhythmia (complication)": {
            "Tachycardia": {
              "Polymorphic ventricular tachycardia (VT)": {},
              "Tachyarrhythmia": {}
            }
          },
          "Noncardiogenic pulmonary edema": {
            "Acute respiratory distress syndrome (ARDS)": {
              "COVID-19 associated ARDS (CARDS)": {},
              "Neurogenic pulmonary edema (NPE)": {}
            }
          },
          "Cardiac injury": {},
          "Cardiac arrest": {},
          "Cardiogenic shock": {},
          "Blood clot": {
            "Arterial clot": {},
            "Deep vein thrombosis (DVT)": {},
            "Pulmonary embolism (PE)": {}
          },
          "Cardiomyopathy": {},
          "Central nervous system invasion": {},
          "Stroke (complication)": {
            "Central Nervous System Vasculitis": {},
            "Ischemic stroke": {
              "Acute ischemic stroke": {}
            }
          },
          "Coma": {},
          "Convulsions": {},
          "COVID-19 associated coagulopathy (CAC)": {},
          "Cystic fibrosis": {},
          "Cytokine release syndrome": {},
          "Disseminated intravascular coagulation (DIC)": {},
          "Encephalopathy": {},
          "Fulminant myocarditis": {},
          "Guillain-Barr\u00e9 syndrome": {},
          "Internal hemorrhage (complication; internal bleeding)": {
            "Intracerebral haemorrhage": {}
          },
          "Kawasaki disease": {
            "Typical Kawasaki disease": {},
            "Incomplete Kawasaki disease": {}
          },
          "Kidney injury": {
            "Acute kidney injury": {}
          },
          "Liver dysfunction": {},
          "Liver injury": {
            "Acute liver injury": {}
          },
          "Lung injury": {
            "Acute lung injury": {}
          },
          "Meningitis": {},
          "Migraine": {},
          "Miscarriage": {},
          "Multisystem inflammatory syndrome in children (MIS-C)": {},
          "Muscle injury": {},
          "Myalgic encephalomyelitis (ME)": {},
          "Myocardial infarction (heart attack)": {
            "Acute myocardial infarction": {},
            "Elevation myocardial infarction": {},
            "ST-segment elevation myocardial infarction": {}
          },
          "Myocardial injury": {},
          "Neonatal complications": {},
          "Organ failure": {
            "Heart failure": {},
            "Liver failure": {}
          },
          "Paralysis": {},
          "Pneumothorax (collapsed lung)": {
            "Spontaneous pneumothorax": {},
            "Spontaneous tension pneymothorax": {}
          },
          "Pneumonia (complication)": {
            "COVID-19 pneumonia": {}
          },
          "Pregancy complications": {},
          "Rhabdomyolysis": {},
          "Secondary infection": {
            "Secondary staph infection": {},
            "Secondary strep infection": {}
          },
          "Seizure (complication)": {
            "Motor seizure": {}
          },
          "Sepsis": {},
          "Septicemia": {},
          "Shock": {
            "Hyperinflammatory shock": {},
            "Refractory cardiogenic shock": {},
            "Refractory cardiogenic plus vasoplegic shock": {},
            "Septic shock": {}
          },
          "Vasculitis": {},
          "Ventilation induced lung injury (VILI)": {}
        }
      }
    ]
  },
  {
    "fieldName": "Host vaccination information",
    "children": [
      {
        "fieldName": "host vaccination status",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The vaccination status of the host (fully vaccinated, partially vaccinated, or not vaccinated).",
        "guidance": "Select the vaccination status of the host from the pick list.",
        "examples": "Fully Vaccinated",
        "exportField": {
          "BIOSAMPLE": [
            {
              "field": "prior_SARS-CoV-2_vaccination"
            }
          ]
        },
        "vocabulary": {
          "Fully Vaccinated": {
            "exportField": {
              "BIOSAMPLE": [
                {
                  "field": "prior_SARS-CoV-2_vaccination",
                  "value": "Yes"
                }
              ]
            }
          },
          "Partially Vaccinated": {
            "exportField": {
              "BIOSAMPLE": [
                {
                  "field": "prior_SARS-CoV-2_vaccination",
                  "value": "Yes"
                }
              ]
            }
          },
          "Not Vaccinated": {
            "exportField": {
              "BIOSAMPLE": [
                {
                  "field": "prior_SARS-CoV-2_vaccination",
                  "value": "No"
                }
              ]
            }
          }
        }
      },
      {
        "fieldName": "vaccine name",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The name of the vaccine.",
        "guidance": "Free text. Provide the name of the vaccine.",
        "examples": "BNT162b2, Pfizer-BioNTech",
        "exportField": {
          "BIOSAMPLE": [
            {
              "field": "vaccine_received"
            }
          ]
        }
      },
      {
        "fieldName": "number of vaccine doses received",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:nonNegativeInteger",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The number of doses of the vaccine recived by the host.",
        "guidance": "Record how many doses of the vaccine the host has received.",
        "examples": "2"
      },
      {
        "fieldName": "first dose vaccination date",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:date",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The date the host was first vaccinated.",
        "guidance": "Provide the vaccination date in ISO 8601 standard format \"YYYY-MM-DD\".",
        "examples": "2021-02-26",
        "exportField": {
          "BIOSAMPLE": [
            {
              "field": "date_of_prior_SARS-CoV-2_vaccination_(1st_dose)"
            }
          ]
        }
      },
      {
        "fieldName": "last dose vaccination date",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:date",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The date the host received their last dose of vaccine.",
        "guidance": "Provide the date that the last dose of the vaccine was administered. Provide the last dose vaccination date in ISO 8601 standard format \"YYYY-MM-DD\".",
        "examples": "2021-04-09"
      }
    ]
  },
  {
    "fieldName": "Host exposure information",
    "children": [
      {
        "fieldName": "location of exposure geo_loc name (country)",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "geo_loc_name (country)",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The country where the host was likely exposed to the causative agent of the illness.",
        "guidance": "Select the country name from pick list provided in the template.",
        "examples": "Canada",
        "exportField": {
          "BIOSAMPLE": [
            {
              "field": "location_of_exposure_geo_loc_name_(country)"
            }
          ]
        },
        "vocabulary": {}
      },
      {
        "fieldName": "destination of most recent travel (city)",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The name of the city that was the destination of most recent travel.",
        "guidance": "Provide the name of the city that the host travelled to. Use this look-up service to identify the standardized term: https://www.ebi.ac.uk/ols/ontologies/gaz",
        "examples": "New York City"
      },
      {
        "fieldName": "destination of most recent travel (state/province/territory)",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The name of the province that was the destination of most recent travel.",
        "guidance": "Provide the name of the state/province/territory that the host travelled to. Use this look-up service to identify the standardized term: https://www.ebi.ac.uk/ols/ontologies/gaz",
        "examples": "California"
      },
      {
        "fieldName": "destination of most recent travel (country)",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "geo_loc_name (country)",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The name of the country that was the destination of most recent travel.",
        "guidance": "Provide the name of the country that the host travelled to. Use this look-up service to identify the standardized term: https://www.ebi.ac.uk/ols/ontologies/gaz",
        "examples": "United Kingdom",
        "vocabulary": {}
      },
      {
        "fieldName": "most recent travel departure date",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:date",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The date of a person's most recent departure from their primary residence (at that time) on a journey to one or more other locations.",
        "guidance": "Provide the travel departure date.",
        "examples": "2020-03-16"
      },
      {
        "fieldName": "most recent travel return date",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:date",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The date of a person's most recent return to some residence from a journey originating at that residence.",
        "guidance": "Provide the travel return date.",
        "examples": "2020-04-26",
        "exportField": {
          "BIOSAMPLE": [
            {
              "field": "recent_travel_history_return_date"
            }
          ]
        }
      },
      {
        "fieldName": "travel history",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "Travel history in last six months.",
        "guidance": "Specify the countries (and more granular locations if known, separated by a comma) travelled in the last six months; can include multiple travels. Separate multiple travel events with a semi-colon. List most recent travel first.",
        "examples": "Canada, Vancouver; USA, Seattle; Italy, Milan",
        "exportField": {
          "BIOSAMPLE": [
            {
              "field": "receent_travel_history_location"
            }
          ]
        }
      },
      {
        "fieldName": "exposure event",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "Event leading to exposure.",
        "guidance": "Select an exposure event from the pick list provided in the template. If the desired term is missing, contact the curation team.",
        "examples": "Convention",
        "exportField": {
          "GISAID": [
            {
              "field": "Additional location information"
            }
          ],
          "BIOSAMPLE": [
            {
              "field": "exposure_event"
            }
          ]
        },
        "vocabulary": {
          "Mass Gathering": {
            "Convention": {},
            "Convocation": {},
            "Agricultural Event": {}
          },
          "Religious Gathering": {
            "Mass": {}
          },
          "Social Gathering": {
            "Baby Shower": {},
            "Community Event": {},
            "Family Gathering": {
              "Family Reunion": {}
            },
            "Funeral": {},
            "Party": {},
            "Potluck": {},
            "Wedding": {}
          },
          "Other exposure event": {}
        }
      },
      {
        "fieldName": "exposure contact level",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The exposure transmission contact type.",
        "guidance": "Select direct or indirect exposure from the pick-list.",
        "examples": "Direct",
        "vocabulary": {
          "Contact with infected individual": {
            "Direct contact (direct human-to-human contact)": {},
            "Indirect contact": {
              "Close contact (face-to-face, no direct contact)": {},
              "Casual contact": {}
            }
          }
        }
      },
      {
        "fieldName": "host role",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "multiple",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The role of the host in relation to the exposure setting.",
        "guidance": "Select the host's personal role(s) from the pick list provided in the template. If the desired term is missing, contact the curation team.",
        "examples": "Patient",
        "vocabulary": {
          "Attendee": {
            "Student": {}
          },
          "Patient": {
            "Inpatient": {},
            "Outpatient": {}
          },
          "Passenger": {},
          "Resident": {},
          "Visitor": {},
          "Volunteer": {},
          "Work": {
            "Administrator": {},
            "First Responder": {
              "Firefighter": {},
              "Paramedic": {},
              "Police Officer": {}
            },
            "Healthcare Worker": {},
            "Nurse": {},
            "Personal Care Aid": {},
            "Pharmacist": {},
            "Physician": {},
            "Housekeeper": {},
            "Kitchen Worker": {},
            "Laboratory Worker": {},
            "Rotational Worker": {},
            "Seasonal Worker": {},
            "Veterinarian": {}
          },
          "Social role": {
            "Acquaintance of case": {},
            "Relative of case": {
              "Child of case": {},
              "Parent of case": {},
              "Father of case": {},
              "Mother of case": {}
            },
            "Spouse of case": {}
          },
          "Other Host Role": {}
        }
      },
      {
        "fieldName": "exposure setting",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "multiple",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The setting leading to exposure.",
        "guidance": "Select the host exposure setting(s) from the pick list provided in the template. If a desired term is missing, contact the curation team.",
        "examples": "Healthcare Setting",
        "vocabulary": {
          "Human Exposure": {
            "Known COVID-19 Case": {},
            "Patient Contact": {},
            "Probable COVID-19 Case": {},
            "Person with Acute Respiratory Illness": {},
            "Person with Fever and/or Cough": {},
            "Person who Recently Travelled": {}
          },
          "Occupational or Residency Exposure": {
            "Abbatoir": {},
            "Animal Rescue": {},
            "Childcare": {
              "Daycare": {}
            },
            "Funeral Home": {},
            "Place of Worship": {
              "Church": {},
              "Mosque": {},
              "Temple": {}
            },
            "Nursery": {},
            "Household": {},
            "Community Service Centre": {},
            "Correctional Facility": {},
            "Dormitory": {},
            "Farm": {},
            "First Nations Reserve": {},
            "Group Home": {},
            "Healthcare Setting": {
              "Ambulance": {},
              "Acute Care Facility": {},
              "Clinic": {},
              "Community Health Centre": {},
              "Hospital": {
                "Emergency Department": {},
                "ICU": {},
                "Ward": {}
              },
              "Laboratory": {},
              "Long-Term Care Facility": {},
              "Pharmacy": {},
              "Physician's Office": {}
            },
            "Insecure Housing (Homeless)": {},
            "Office": {},
            "Outdoors": {
              "Camp/camping": {},
              "Hiking": {},
              "Hunting": {}
            },
            "Petting zoo": {},
            "Restaurant": {},
            "Retail Store": {},
            "School": {},
            "Temporary Residence": {
              "Homeless Shelter": {},
              "Hotel": {}
            },
            "Veterinary Care Clinic": {}
          },
          "Travel Exposure": {
            "Travelled": {},
            "Travelled on a Cruise Ship": {},
            "Travelled on a Plane": {},
            "Travelled on Ground Transport": {},
            "Travelled outside Province/Territory": {},
            "Travelled outside Canada": {}
          },
          "Other Exposure Setting": {}
        }
      },
      {
        "fieldName": "exposure details",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "Additional host exposure information.",
        "guidance": "Free text description of the exposure.",
        "examples": "Host role - Other: Bus Driver"
      }
    ]
  },
  {
    "fieldName": "Host reinfection information",
    "children": [
      {
        "fieldName": "prior SARS-CoV-2 infection",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "Whether there was prior SARS-CoV-2 infection.",
        "guidance": "If known, provide infromation about whether the individual had a previous SARS-CoV-2 infection. Select a value from the pick list.",
        "examples": "Yes",
        "exportField": {
          "BIOSAMPLE": [
            {
              "field": "prior_SARS-CoV-2_infection"
            }
          ]
        },
        "vocabulary": {
          "Yes": {},
          "No": {},
          "Unknown": {}
        }
      },
      {
        "fieldName": "prior SARS-CoV-2 infection isolate",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The identifier of the isolate found in the prior SARS-CoV-2 infection.",
        "guidance": "Provide the isolate name of the most recent prior infection. Structure the \"isolate\" name to be ICTV/INSDC compliant in the following format: \"SARS-CoV-2/host/country/sampleID/date\".",
        "examples": "SARS-CoV-2/human/USA/CA-CDPH-001/2020",
        "exportField": {
          "BIOSAMPLE": [
            {
              "field": "virus_isolate_of_prior_infection"
            }
          ]
        }
      },
      {
        "fieldName": "prior SARS-CoV-2 infection date",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:date",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The date of diagnosis of the prior SARS-CoV-2 infection.",
        "guidance": "Provide the date that the most recent prior infection was diagnosed. Provide the prior SARS-CoV-2 infection date in ISO 8601 standard format \"YYYY-MM-DD\".",
        "examples": "2021-01-23",
        "exportField": {
          "BIOSAMPLE": [
            {
              "field": "date_of_prior_SARS-CoV-2_infection"
            }
          ]
        }
      },
      {
        "fieldName": "prior SARS-CoV-2 antiviral treatment",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "Whether there was prior SARS-CoV-2 treatment with an antiviral agent.",
        "guidance": "If known, provide infromation about whether the individual had a previous SARS-CoV-2 antiviral treatment. Select a value from the pick list.",
        "examples": "No prior antiviral treatment",
        "exportField": {
          "BIOSAMPLE": [
            {
              "field": "prior_SARS-CoV-2_antiviral_treatment"
            }
          ]
        },
        "vocabulary": {
          "Prior antivrial treatment": {
            "exportField": {
              "BIOSAMPLE": [
                {
                  "field": "prior_SARS-CoV-2_antiviral_treatment",
                  "value": "Yes"
                }
              ]
            }
          },
          "No prior antivrial treatment": {
            "exportField": {
              "BIOSAMPLE": [
                {
                  "field": "prior_SARS-CoV-2_antiviral_treatment",
                  "value": "No"
                }
              ]
            }
          },
          "Unknown": {}
        }
      },
      {
        "fieldName": "prior SARS-CoV-2 antiviral treatment agent",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The name of the antiviral treatment agent administered during the prior SARS-CoV-2 infection.",
        "guidance": "Provide the name of the antiviral treatment agent administered during the most recent prior infection. If no treatment was administered, put \"No treatment\". If multiple antiviral agents were administered, list them all separated by commas.",
        "examples": "Remdesivir",
        "exportField": {
          "BIOSAMPLE": [
            {
              "field": "antiviral_treatment_agent"
            }
          ]
        }
      },
      {
        "fieldName": "prior SARS-CoV-2 antiviral treatment date",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:date",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The date treatment was first administered during the prior SARS-CoV-2 infection.",
        "guidance": "Provide the date that the antiviral treatment agent was first administered during the most recenrt prior infection. Provide the prior SARS-CoV-2 treatment date in ISO 8601 standard format \"YYYY-MM-DD\".",
        "examples": "2021-01-28",
        "exportField": {
          "BIOSAMPLE": [
            {
              "field": "date_of_prior_SARS-CoV-2_antiviral_treatment"
            }
          ]
        }
      }
    ]
  },
  {
    "fieldName": "Sequencing",
    "children": [
      {
        "fieldName": "purpose of sequencing",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "The reason that the sample was sequenced.",
        "guidance": "The reason why a sample was originally collected may differ from the reason why it was selected for sequencing. The reason a sample was sequenced may provide information about potential biases in sequencing strategy. Provide the purpose of sequencing from the picklist in the template. The reason for sample collection should be indicated in the \"purpose of sampling\" field. ",
        "examples": "Baseline surveillance (random sampling)",
        "exportField": {
          "BIOSAMPLE": [
            {
              "field": "purpose_of_sequencing"
            }
          ]
        },
        "vocabulary": {
          "Baseline surveillance (random sampling)": {},
          "Targeted surveillance (non-random sampling)": {
            "Priority surveillance project": {
              "Screening for Variants of Concern (VoC)": {},
              "Longitudinal surveillance (repeat sampling)": {},
              "Vaccine escape surveillance": {},
              "Travel-associated surveillance": {
                "Domestic travel surveillance": {},
                "International travel surveillance": {}
              }
            }
          },
          "Cluster/Outbreak investigation": {
            "Multi-jurisdictional outbreak investigation": {},
            "Intra-jurisdictional outbreak investigation": {}
          },
          "Research": {
            "Viral passage experiment": {},
            "Protocol testing experiment": {}
          }
        }
      },
      {
        "fieldName": "purpose of sequencing details",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "The description of why the sample was sequenced providing specific details.",
        "guidance": "Provide an expanded description of why the sample was sequenced using free text. The description may include the importance of the sequences for a particular public health investigation/surveillance activity/research question. Suggested standardized descriotions include: Screened for S gene target failure (S dropout), Screened for mink variants, Screened for B.1.1.7 variant, Screened for B.1.135 variant, Screened for P.1 variant, Screened due to travel history, Screened due to close contact with infected individual, Assessing public health control measures, Determining early introductions and spread, Investigating airline-related exposures, Investigating temporary foreign worker, Investigating remote regions, Investigating health care workers, Investigating schools/universities, Investigating reinfection.\n",
        "examples": "Screened for S gene target failure (S dropout)"
      },
      {
        "fieldName": "sequencing date",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:date",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The date the sample was sequenced.",
        "guidance": "ISO 8601 standard \"YYYY-MM-DD\".",
        "examples": "2020-06-22"
      },
      {
        "fieldName": "library ID",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "recommended",
        "description": "The user-specified identifier for the library prepared for sequencing.",
        "guidance": "The library name should be unique, and can be an autogenerated ID from your LIMS, or modification of the isolate ID.",
        "examples": "XYZ_123345",
        "exportField": {
          "SRA": [
            {
              "field": "library_ID"
            }
          ]
        }
      },
      {
        "fieldName": "amplicon size",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The length of the amplicon generated by PCR amplification.",
        "guidance": "Provide the amplicon size, including the units.",
        "examples": "300bp",
        "exportField": {
          "SRA": [
            {
              "field": "amplicon_size"
            }
          ]
        }
      },
      {
        "fieldName": "library preparation kit",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The name of the DNA library preparation kit used to generate the library being sequenced.",
        "guidance": "Provide the name of the library preparation kit used.",
        "examples": "Nextera XT"
      },
      {
        "fieldName": "flow cell barcode",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The barcode of the flow cell used for sequencing.",
        "guidance": "Provide the barcode of the flow cell used for sequencing the sample.",
        "examples": "FAB06069"
      },
      {
        "fieldName": "sequencing instrument",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "multiple",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "The model of the sequencing instrument used.",
        "guidance": "Select a sequencing instrument from the picklist provided in the template.",
        "examples": "MinIon",
        "exportField": {
          "GISAID": [
            {
              "field": "Sequencing technology"
            }
          ],
          "Genbank": [
            {
              "field": "sequencing_technology"
            }
          ]
        },
        "vocabulary": {
          "Illumina": {
            "exportField": {
              "SRA": [
                {
                  "field": "platform",
                  "value": "ILLUMINA"
                }
              ]
            },
            "Illumina Genome Analyzer": {
              "Illumina Genome Analyzer II": {},
              "Illumina Genome Analyzer IIx": {}
            },
            "Illumina HiScanSQ": {},
            "Illumina HiSeq": {},
            "Illumina HiSeq X": {
              "Illumina HiSeq X Five": {},
              "Illumina HiSeq X Ten": {}
            },
            "Illumina HiSeq 1000": {},
            "Illumina HiSeq 1500": {},
            "Illumina HiSeq 2000": {},
            "Illumina HiSeq 2500": {},
            "Illumina HiSeq 3000": {},
            "Illumina HiSeq 4000": {},
            "Illumina iSeq": {
              "Illumina iSeq 100": {}
            },
            "Illumina NovaSeq": {
              "Illumina NovaSeq 6000": {}
            },
            "Illumina MiniSeq": {},
            "Illumina MiSeq": {},
            "Illumina NextSeq": {},
            "Illumina NextSeq 500": {},
            "Illumina NextSeq 550": {}
          },
          "Pacific Biosciences": {
            "exportField": {
              "SRA": [
                {
                  "field": "platform",
                  "value": "PACBIO_SMRT"
                }
              ]
            },
            "PacBio RS": {},
            "PacBio RS II": {},
            "PacBio Sequel": {},
            "PacBio Sequel II": {}
          },
          "Ion Torrent": {
            "exportField": {
              "SRA": [
                {
                  "field": "platform",
                  "value": "ION_TORRENT"
                }
              ]
            },
            "Ion Torrent PGM": {},
            "Ion Torrent Proton": {},
            "Ion Torrent S5 XL": {},
            "Ion Torrent S5": {}
          },
          "Oxford Nanopore": {
            "exportField": {
              "SRA": [
                {
                  "field": "platform",
                  "value": "OXFORD_NANOPORE"
                }
              ]
            },
            "GridION": {},
            "MinION": {},
            "PromethION": {}
          },
          "BGI Genomics": {
            "BGISEQ-500": {}
          },
          "MGI": {
            "DNBSEQ-T7": {},
            "DNBSEQ-G400": {},
            "DNBSEQ-G400 FAST": {},
            "DNBSEQ-G50": {}
          }
        }
      },
      {
        "fieldName": "sequencing protocol name",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "recommended",
        "description": "The name and version number of the sequencing protocol used.",
        "guidance": "Provide the name and version of the sequencing protocol e.g. 1D_DNA_MinION",
        "examples": "https://www.protocols.io/view/covid-19-artic-v3-illumina-library-construction-an-bibtkann",
        "exportField": {
          "SRA": [
            {
              "field": "sequencing_protocol_name"
            }
          ]
        }
      },
      {
        "fieldName": "sequencing protocol",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The protocol used to generate the sequence.",
        "guidance": "Provide a free text description of the methods and materials used to generate the sequence. Suggested text, fill in information where indicated.: \"Viral sequencing was performed following a tiling amplicon strategy using the <fill in> primer scheme. Sequencing was performed using a <fill in> sequencing instrument. Libraries were prepared using <fill in> library kit. \"",
        "examples": "Genomes were generated through amplicon sequencing of 1200 bp amplicons with Freed schema primers. Libraries were created using Illumina DNA Prep kits, and sequence data was produced using Miseq Micro v2 (500 cycles) sequencing kits.",
        "exportField": {
          "SRA": [
            {
              "field": "design_description"
            }
          ]
        }
      },
      {
        "fieldName": "sequencing kit number",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The manufacturer's kit number.",
        "guidance": "Alphanumeric value.",
        "examples": "AB456XYZ789"
      },
      {
        "fieldName": "amplicon pcr primer scheme",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The specifications of the primers (primer sequences, binding positions, fragment size generated etc) used to generate the amplicons to be sequenced.",
        "guidance": "Provide the name and version of the primer scheme used to generate the amplicons for sequencing.",
        "examples": "https://github.com/joshquick/artic-ncov2019/blob/master/primer_schemes/nCoV-2019/V3/nCoV-2019.tsv",
        "exportField": {
          "SRA": [
            {
              "field": "amplicon _PCR_primer_scheme"
            }
          ]
        }
      }
    ]
  },
  {
    "fieldName": "Bioinformatics and QC metrics",
    "children": [
      {
        "fieldName": "raw sequence data processing method",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "recommended",
        "description": "The names of the software and version number used for raw data processing such as removing barcodes, adapter trimming, filtering etc.",
        "guidance": "Provide the software name followed by the version e.g. Trimmomatic v. 0.38, Porechop v. 0.2.3",
        "examples": "Porechop 0.2.3",
        "exportField": {
          "SRA": [
            {
              "field": "raw_sequence_data_processing_method"
            }
          ]
        }
      },
      {
        "fieldName": "dehosting method",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "recommended",
        "description": "The method used to remove host reads from the pathogen sequence.",
        "guidance": "Provide the name and version number of the software used to remove host reads.",
        "examples": "Nanostripper",
        "exportField": {
          "SRA": [
            {
              "field": "dehosting_method"
            }
          ]
        }
      },
      {
        "fieldName": "consensus sequence name",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The name of the consensus sequence.",
        "guidance": "Provide the name and version number of the consensus sequence.",
        "examples": "ncov123assembly3",
        "exportField": {
          "Genbank": [
            {
              "field": "assembly_name"
            }
          ]
        }
      },
      {
        "fieldName": "consensus sequence filename",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The name of the consensus sequence file.",
        "guidance": "Provide the name and version number of the consensus sequence FASTA file.",
        "examples": "ncov123assembly.fasta",
        "exportField": {
          "Genbank": [
            {
              "field": "filename"
            }
          ]
        }
      },
      {
        "fieldName": "consensus sequence filepath",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The filepath of the consesnsus sequence file.",
        "guidance": "Provide the filepath of the consensus sequence FASTA file.",
        "examples": "/User/Documents/RespLab/Data/ncov123assembly.fasta"
      },
      {
        "fieldName": "consensus sequence software name",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "The name of software used to generate the consensus sequence.",
        "guidance": "Provide the name of the software used to generate the consensus sequence.",
        "examples": "Ivar",
        "exportField": {
          "Genbank": [
            {
              "field": "assembly_method"
            }
          ]
        }
      },
      {
        "fieldName": "consensus sequence software version",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:decimal",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "required",
        "description": "The version of the software used to generate the consensus sequence.",
        "guidance": "Provide the version of the software used to generate the consensus sequence.",
        "examples": "1.3",
        "exportField": {
          "Genbank": [
            {
              "field": "assembly_method_version"
            }
          ]
        }
      },
      {
        "fieldName": "breadth of coverage value",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The percentage of the reference genome covered by the sequenced data, to a prescribed depth.",
        "guidance": "Provide value as a percent.",
        "examples": "95%"
      },
      {
        "fieldName": "depth of coverage value",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The average number of reads representing a given nucleotide in the reconstructed sequence.",
        "guidance": "Provide value as a fold of coverage.",
        "examples": "400x",
        "exportField": {
          "GISAID": [
            {
              "field": "Coverage"
            }
          ],
          "Genbank": [
            {
              "field": "genome_coverage"
            }
          ]
        }
      },
      {
        "fieldName": "depth of coverage threshold",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The threshold used as a cut-off for the depth of coverage.",
        "guidance": "Provide the threshold fold coverage.",
        "examples": "100x"
      },
      {
        "fieldName": "r1 fastq filename",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The user-specified filename of the r1 FASTQ file.",
        "guidance": "Provide the r1 FASTQ filename.",
        "examples": "ABC123_S1_L001_R1_001.fastq.gz"
      },
      {
        "fieldName": "r2 fastq filename",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The user-specified filename of the r2 FASTQ file.",
        "guidance": "Provide the r2 FASTQ filename.",
        "examples": "ABC123_S1_L001_R2_001.fastq.gz"
      },
      {
        "fieldName": "r1 fastq filepath",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The location of the r1 FASTQ file within a user's file system.",
        "guidance": "Provide the filepath for the r1 FASTQ file. This information aids in data management. ",
        "examples": "/User/Documents/RespLab/Data/ABC123_S1_L001_R1_001.fastq.gz"
      },
      {
        "fieldName": "r2 fastq filepath",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The location of the r2 FASTQ file within a user's file system.",
        "guidance": "Provide the filepath for the r2 FASTQ file. This information aids in data management. ",
        "examples": "/User/Documents/RespLab/Data/ABC123_S1_L001_R2_001.fastq.gz"
      },
      {
        "fieldName": "fast5 filename",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The user-specified filename of the FAST5 file.",
        "guidance": "Provide the FAST5 filename.",
        "examples": "rona123assembly.fast5"
      },
      {
        "fieldName": "fast5 filepath",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The location of the FAST5 file within a user's file system.",
        "guidance": "Provide the filepath for the FAST5 file. This information aids in data management. ",
        "examples": "/User/Documents/RespLab/Data/rona123assembly.fast5"
      },
      {
        "fieldName": "number of base pairs sequenced",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:nonNegativeInteger",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The number of total base pairs generated by the sequencing process.",
        "guidance": "Provide a numerical value (no need to include units).",
        "examples": "387566"
      },
      {
        "fieldName": "consensus genome length",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:nonNegativeInteger",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "Size of the reconstructed genome described as the number of base pairs.",
        "guidance": "Provide a numerical value (no need to include units).",
        "examples": "38677"
      },
      {
        "fieldName": "Ns per 100 kbp",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:decimal",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "0",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The number of N symbols present in the consensus fasta sequence, per 100kbp of sequence.",
        "guidance": "Provide a numerical value (no need to include units).",
        "examples": "330"
      },
      {
        "fieldName": "reference genome accession",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "A persistent, unique identifier of a genome database entry.",
        "guidance": "Provide the accession number of the reference genome.",
        "examples": "NC_045512.2",
        "exportField": {
          "Genbank": [
            {
              "field": "reference_genome"
            }
          ]
        }
      },
      {
        "fieldName": "bioinformatics protocol",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The name and version number of the bioinformatics protocol used.",
        "guidance": "Further details regarding the methods used to process raw data, and/or generate assemblies, and/or generate consensus sequences can be provided in an SOP or protocol. Provide the name and version number of the protocol.",
        "examples": "https://www.protocols.io/groups/cphln-sarscov2-sequencing-consortium/members"
      }
    ]
  },
  {
    "fieldName": "Lineage and Variant information",
    "children": [
      {
        "fieldName": "lineage/clade name",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The name of the lineage or clade.",
        "guidance": "Provide the Pangolin or Nextstrain lineage/clade name.",
        "examples": "B.1.1.7"
      },
      {
        "fieldName": "lineage/clade analysis software name",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The name of the software used to determine the lineage/clade.",
        "guidance": "Provide the name of the software used to determine the lineage/clade.",
        "examples": "Pangolin"
      },
      {
        "fieldName": "lineage/clade analysis software version",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The version of the software used to determine the lineage/clade.",
        "guidance": "Provide the version of the software used ot determine the lineage/clade.",
        "examples": "2.1.10"
      },
      {
        "fieldName": "variant designation",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The variant classification of the lineage/clade i.e. variant, variant of concern.",
        "guidance": "If the lineage/clade is considered a Variant of Concern, select Variant of Concern from the pick list. If the lineage/clade contains mutations of concern (mutations that increase transmission, clincal severity, or other epidemiological fa ctors) but it not a global Variant of Concern, select Variant. If the lineage/clade does not contain mutations of concern, leave blank.",
        "examples": "Variant of Concern",
        "vocabulary": {
          "Variant of Concern (VOC)": {},
          "Variant  of Interest (VOI)": {}
        }
      },
      {
        "fieldName": "variant evidence",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The evidence used to make the variant determination.",
        "guidance": "Provide the assay and list the set of lineage-defining mutations used to make the variant determination. If there are mutations of interest/concern observed in addition to lineage-defining mutations, describe those here.",
        "examples": "RT-qPCR TaqPath assay: S gene target failure"
      }
    ]
  },
  {
    "fieldName": "Pathogen diagnostic testing",
    "children": [
      {
        "fieldName": "gene name 1",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The name of the gene used in the diagnostic RT-PCR test.",
        "guidance": "Provide the full name of the gene used in the test. The gene symbol (short form of gene name) can also be provided. Standardized gene names and symbols can be found in the Gene Ontology using this look-up service: https://bit.ly/2Sq1LbI",
        "examples": "E (orf4)",
        "exportField": {
          "BIOSAMPLE": [
            {
              "field": "diagnostic_gene_name_1"
            }
          ]
        },
        "vocabulary": {
          "E gene (orf4)": {},
          "M gene (orf5)": {},
          "N gene (orf9)": {},
          "Spike gene (orf2)": {},
          "orf1ab (rep)": {
            "orf1a (pp1a)": {
              "nsp11": {}
            },
            "nsp1": {},
            "nsp2": {},
            "nsp3": {},
            "nsp4": {},
            "nsp5": {},
            "nsp6": {},
            "nsp7": {},
            "nsp8": {},
            "nsp9": {},
            "nsp10": {},
            "RdRp gene (nsp12)": {},
            "hel gene (nsp13)": {},
            "exoN gene (nsp14)": {},
            "nsp15": {},
            "nsp16": {}
          },
          "orf3a": {},
          "orf3b": {},
          "orf6 (ns6)": {},
          "orf7a": {},
          "orf7b (ns7b)": {},
          "orf8 (ns8)": {},
          "orf9b": {},
          "orf9c": {},
          "orf10": {},
          "orf14": {},
          "SARS-COV-2 5' UTR": {}
        }
      },
      {
        "fieldName": "diagnostic pcr protocol 1",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The name and version number of the protocol used for diagnostic marker amplification.",
        "guidance": "The name and version number of the protocol used for carrying out a diagnostic PCR test. This information can be compared to sequence data for evaluation of performance and quality control.",
        "examples": "EGenePCRTest 2",
        "exportField": {
          "BIOSAMPLE": [
            {
              "field": "diagnostic_pcr_protocol_value_1"
            }
          ]
        }
      },
      {
        "fieldName": "diagnostic pcr Ct value 1",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The Ct value result from a diagnostic SARS-CoV-2 RT-PCR test.",
        "guidance": "Provide the CT value of the sample from the diagnostic RT-PCR test.",
        "examples": "21",
        "exportField": {
          "BIOSAMPLE": [
            {
              "field": "diagnostic_pcr_Ct_value_1"
            }
          ]
        }
      },
      {
        "fieldName": "gene name 2",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "gene name 1",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The name of the gene used in the diagnostic RT-PCR test.",
        "guidance": "Provide the full name of another gene used in an RT-PCR test. The gene symbol (short form of gene name) can also be provided. Standardized gene names and symbols can be found in the Gene Ontology using this look-up service: https://bit.ly/2Sq1LbI",
        "examples": "nsp12 (RdRp)",
        "exportField": {
          "BIOSAMPLE": [
            {
              "field": "diagnostic_gene_name_2"
            }
          ]
        },
        "vocabulary": {}
      },
      {
        "fieldName": "diagnostic pcr protocol 2",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The name and version number of the protocol used for diagnostic marker amplification.",
        "guidance": "The name and version number of the protocol used for carrying out a second diagnostic PCR test. This information can be compared to sequence data for evaluation of performance and quality control.",
        "examples": "RdRpGenePCRTest 3",
        "exportField": {
          "BIOSAMPLE": [
            {
              "field": "diagnostic_pcr_protocol_value_2"
            }
          ]
        }
      },
      {
        "fieldName": "diagnostic pcr Ct value 2",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The Ct value result from a diagnostic SARS-CoV-2 RT-PCR test.",
        "guidance": "Provide the CT value of the sample from the second diagnostic RT-PCR test.",
        "examples": "36",
        "exportField": {
          "BIOSAMPLE": [
            {
              "field": "diagnostic_pcr_Ct_value_2"
            }
          ]
        }
      },
      {
        "fieldName": "gene name 3",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "gene name 1",
        "dataStatus": [
          "Not Applicable",
          "Missing",
          "Not Collected",
          "Not Provided",
          "Restricted Access"
        ],
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The name of the gene used in the diagnostic RT-PCR test.",
        "guidance": "Provide the full name of another gene used in an RT-PCR test. The gene symbol (short form of gene name) can also be provided. Standardized gene names and symbols can be found in the Gene Ontology using this look-up service: https://bit.ly/2Sq1LbI",
        "examples": "nsp12 (RdRp)",
        "vocabulary": {}
      },
      {
        "fieldName": "diagnostic pcr protocol 3",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The name and version number of the protocol used for diagnostic marker amplification.",
        "guidance": "The name and version number of the protocol used for carrying out a second diagnostic PCR test. This information can be compared to sequence data for evaluation of performance and quality control.",
        "examples": "RdRpGenePCRTest 3"
      },
      {
        "fieldName": "diagnostic pcr Ct value 3",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "The Ct value result from a diagnostic SARS-CoV-2 RT-PCR test.",
        "guidance": "Provide the CT value of the sample from the second diagnostic RT-PCR test.",
        "examples": "30"
      }
    ]
  },
  {
    "fieldName": "NCBI SRA information",
    "children": [
      {
        "fieldName": "bioproject_accession",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "prepopulate",
        "description": "This will be populated by the PHA4GE field \"bioproject accession\".",
        "guidance": "Populate the \"bioproject accession\" field.",
        "examples": ""
      },
      {
        "fieldName": "sample_name",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "prepopulate",
        "description": "This will be populated by the PHA4GE field \"biosample accession\".",
        "guidance": "Populate the \"biosample accession\" field.",
        "examples": ""
      },
      {
        "fieldName": "library_ID",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "prepopulate",
        "description": "This will be populated by the PHA4GE field \"library ID\".",
        "guidance": "Populate the \"library ID\" field.",
        "examples": ""
      },
      {
        "fieldName": "title",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "Short description that will identify  the dataset on public pages.",
        "guidance": "Format: {methodology} of {organism}: {sample info}",
        "examples": "Genomic sequencing of SARS-CoV-2: Nasopharynx (NP), Swab",
        "exportField": {
          "SRA": [
            {
              "field": "title"
            }
          ]
        }
      },
      {
        "fieldName": "library_strategy",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "See NCBI SRA template for details.",
        "guidance": "Provide the library strategy by selecting a value from the pick list. For amplicon sequencing select \"AMPLICON\". ",
        "examples": "",
        "exportField": {
          "SRA": [
            {
              "field": "library_strategy"
            }
          ]
        },
        "vocabulary": {
          "WGA": {},
          "WGS": {},
          "WXS": {},
          "RNA-Seq": {},
          "miRNA-Seq": {},
          "WCS": {},
          "CLONE": {},
          "POOLCLONE": {},
          "AMPLICON": {},
          "CLONEEND": {},
          "FINISHING": {},
          "ChIP-Seq": {},
          "MNase-Seq": {},
          "DNase-Hypersensitivity": {},
          "Bisulfite-Seq": {},
          "Tn-Seq": {},
          "EST": {},
          "FL-cDNA": {},
          "CTS": {},
          "MRE-Seq": {},
          "MeDIP-Seq": {},
          "MBD-Seq": {},
          "OTHER": {}
        }
      },
      {
        "fieldName": "library_source",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "See NCBI SRA template for details.",
        "guidance": "Provide the library source by selecting a value from the pick list. For amplicon sequencing select \"Viral RNA\". ",
        "examples": "",
        "exportField": {
          "SRA": [
            {
              "field": "library_source"
            }
          ]
        },
        "vocabulary": {
          "GENOMIC": {},
          "TRANSCRIPTOMIC": {},
          "METAGENOMIC": {},
          "METATRANSCRIPTOMIC": {},
          "SYNTHETIC": {},
          "VIRAL RNA": {},
          "OTHER": {}
        }
      },
      {
        "fieldName": "library_selection",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "See NCBI SRA template for details.",
        "guidance": "Provide the library selection by selecting a value from the pick list. For amplicon sequencing select \"PCR\". ",
        "examples": "",
        "exportField": {
          "SRA": [
            {
              "field": "library_selection"
            }
          ]
        },
        "vocabulary": {
          "RANDOM": {},
          "PCR": {},
          "RANDOM PCR": {},
          "RT-PCR": {},
          "HMPR": {},
          "MF": {},
          "CF-S": {},
          "CF-M": {},
          "CF-H": {},
          "CF-T": {},
          "MDA": {},
          "MSLL": {},
          "cDNA": {},
          "ChIP": {},
          "MNase": {},
          "DNAse": {},
          "Hybrid Selection": {},
          "Reduced Representation": {},
          "Restriction Digest": {},
          "5-methylcytidine antibody": {},
          "MBD2 protein methyl-CpG binding domain": {},
          "CAGE": {},
          "RACE": {},
          "size fractionation": {},
          "Padlock probes capture method": {},
          "other": {},
          "unspecified": {}
        }
      },
      {
        "fieldName": "library_layout",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "See NCBI SRA template for details.",
        "guidance": "Provide the library layout by selecting a value from the pick list. For Illumina instruments, select \"PAIRED\". For Oxford Nanopore instruments, select \"SINGLE\".",
        "examples": "",
        "exportField": {
          "SRA": [
            {
              "field": "library_layout"
            }
          ]
        },
        "vocabulary": {
          "single": {},
          "paired": {}
        }
      },
      {
        "fieldName": "platform",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "prepopulate",
        "description": "This will be populated by the PHA4GE field \"sequencing instrument\".",
        "guidance": "Only a limited set of sequencing platforms are available in the NCBI pick list. If a value appears to be missing, contact PHA4GE and report the issue.",
        "examples": "",
        "vocabulary": {}
      },
      {
        "fieldName": "instrument_model",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "prepopulate",
        "description": "This will be populated by the PHA4GE field \"sequencing instrument\".",
        "guidance": "Only a limited set of sequencing instruments are available in the NCBI pick list. If a value appears to be missing, contact PHA4GE and report the issue.",
        "examples": "",
        "vocabulary": {}
      },
      {
        "fieldName": "filetype",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "select",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "See NCBI SRA template for details.",
        "guidance": "Provide the filetype by selecting a value from the pick list. ",
        "examples": "",
        "vocabulary": {
          "bam": {},
          "sra": {},
          "kar": {},
          "srf": {},
          "sff": {},
          "fastq": {},
          "tab": {},
          "454_native": {},
          "Helicos_native": {},
          "SOLiD_native": {},
          "PacBio_HDF5": {},
          "CompleteGenomics_native": {}
        }
      },
      {
        "fieldName": "filename",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "See NCBI SRA template for details.",
        "guidance": "Provide the filename recorded in the Bioinformatics and QC metrics section.",
        "examples": ""
      },
      {
        "fieldName": "amplicon _PCR_primer_scheme",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "prepopulate",
        "description": "This will be populated by the PHA4GE field \"amplicon  PCR primer scheme\".",
        "guidance": "Populate the \"amplicon PCR primer scheme\" field.",
        "examples": ""
      },
      {
        "fieldName": "amplicon_size",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:nonNegativeInteger",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "prepopulate",
        "description": "This will be populated by the PHA4GE field \"amplicon size\".",
        "guidance": "Populate the \"amplicon size\" field.",
        "examples": ""
      },
      {
        "fieldName": "sequencing_protocol_name",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "prepopulate",
        "description": "This will be populated by the PHA4GE field \"sequencing protocol name\".",
        "guidance": "Populate the \"sequencing protocol name\" field.",
        "examples": ""
      },
      {
        "fieldName": "raw_sequence_data_processing_method",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "prepopulate",
        "description": "This will be populated by the PHA4GE field \"raw sequence data processing method\".",
        "guidance": "Populate the \"raw sequence data processing method\" field.",
        "examples": ""
      },
      {
        "fieldName": "dehosting_method",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "prepopulate",
        "description": "This will be populated by the PHA4GE field \"dehosting method\".",
        "guidance": "Populate the \"dehosting method\" field.",
        "examples": ""
      },
      {
        "fieldName": "sequence_submitter_contact_email",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "prepopulate",
        "description": "This will be populated by the PHA4GE field \"sequence submitter contact email\".",
        "guidance": "Populate the \"sequence submitter contact email\" field.",
        "examples": ""
      }
    ]
  },
  {
    "fieldName": "Contributor acknowledgement",
    "children": [
      {
        "fieldName": "authors",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "xs:token",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "recommended",
        "description": "Names of individuals contributing to the processes of sample collection, sequence generation, analysis, and data submission.",
        "guidance": "Include the first and last names of all individuals that should be attributed, separated by a comma.",
        "examples": "Tejinder Singh, Fei Hu, Joe Blogs",
        "exportField": {
          "GISAID": [
            {
              "field": "Authors"
            }
          ]
        }
      },
      {
        "fieldName": "DataHarmonizer provenance",
        "capitalize": "",
        "ontology_id": "",
        "datatype": "provenance",
        "source": "",
        "dataStatus": null,
        "xs:minInclusive": "",
        "xs:maxInclusive": "",
        "requirement": "",
        "description": "",
        "guidance": "",
        "examples": "",
        "exportField": {
          "GISAID": [
            {
              "field": "DataHarmonizer provenance"
            }
          ]
        }
      }
    ]
  }
]