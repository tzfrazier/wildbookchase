/*
 * Some ideas...
 * Turn your JSON into an object literal
 * JS wants data in JSON and an object literal is just a variable with JSON object definition
 */

// 1 - So lets set up a variable of your data...you have objects inside a big array, totally workable in JS
// Zach - note that I changed a lot of your object keys to camelCase (like number-of-pages became numberOfPages)
// The reason for this is that JS objects don't play nice with dashes...
var wildBookChaseData = [
 	{
 		"id": "IUEXGPFC",
 		"type": "thesis",
 		"title": "Fit, flexibility, and connection: Organizing employment in emerging Web labor markets, New York City, 1993--2003",
 		"publisher": "Columbia University",
 		"publisherPlace": "United States -- New York",
 		"numberOfPages": "299",
 		"genre": "Ph.D.",
 		"source": "ProQuest",
 		"eventPlace": "United States -- New York",
 		"URL": "http://search.proquest.com.pallas2.tcl.sc.edu/pqdtft/docview/305208172/abstract?accountid=13965",
 		"shortTitle": "Fit, flexibility, and connection",
 		"language": "English",
 		"author": [
 			{
 				"family": "Damarin",
 				"given": "Amanda Kidd"
 			}
 		],
 		"issued": {
 			"dateParts": [
 				[
 					"2004"
 				]
 			]
 		},
 		"accessed": {
 			"dateParts": [
 				[
 					"2014",
 					11,
 					12
 				]
 			]
 		}
 	},
 	{
 		"id": "HG78EXDB",
 		"type": "article-journal",
 		"title": "From Information behaviour Research to the Design of Information Systems: the Cognitive Work Analysis Framework",
 		"containerTitle": "Information Research",
 		"volume": "10",
 		"issue": "1",
 		"URL": "http://www.informationr.net/ir/10-1/paper210.html",
 		"shortTitle": "From Information behaviour Research to the Design of Information Systems",
 		"language": "en",
 		"author": [
 			{
 				"family": "Fidel",
 				"given": "Raya"
 			},
 			{
 				"family": "Pejtersen",
 				"given": "Annalise Mark"
 			}
 		],
 		"issued": {
 			"dateParts": [
 				[
 					"2004",
 					10
 				]
 			]
 		},
 		"accessed": {
 			"dateParts": [
 				[
 					"2015",
 					5,
 					6
 				]
 			]
 		}
 	},
 	{
 		"id": "ZUPT9GTI",
 		"type": "thesis",
 		"title": "Web professionals : how do they experience information literacy?",
 		"publisher": "Queensland University of Technology",
 		"genre": "Thesis",
 		"source": "eprints.qut.edu.au",
 		"URL": "http://eprints.qut.edu.au/78982/",
 		"shortTitle": "Web professionals",
 		"author": [
 			{
 				"family": "Sayyad Abdi",
 				"given": "Elham"
 			}
 		],
 		"issued": {
 			"dateParts": [
 				[
 					"2014"
 				]
 			]
 		},
 		"accessed": {
 			"dateParts": [
 				[
 					"2016",
 					4,
 					30
 				]
 			]
 		}
 	},
 	{
 		"id": "S5BZ3XEJ",
 		"type": "book",
 		"title": "Interviewing as qualitative research: a guide for researchers in education and the social sciences",
 		"publisher": "Teachers College Press",
 		"publisherPlace": "New York",
 		"numberOfPages": "119",
 		"source": "libcore.csd.sc.edu Library Catalog",
 		"eventPlace": "New York",
 		"ISBN": "978-0-8077-3074-4",
 		"call-number": "H61.28 .S45 1991",
 		"shortTitle": "Interviewing as qualitative research",
 		"author": [
 			{
 				"family": "Seidman",
 				"given": "I. E."
 			}
 		],
 		"issued": {
 			"dateParts": [
 				[
 					"1991"
 				]
 			]
 		}
 	},
 	{
 		"id": "VZVKB33M",
 		"type": "report",
 		"title": "Technobohemians Or the New Cybertariat?: New Media Work on Amsterdam a Decade After the Web: Report",
 		"publisher": "Institute of Network Cultures",
 		"author": [
 			{
 				"family": "Gill",
 				"given": "Rosalind"
 			}
 		],
 		"issued": {
 			"dateParts": [
 				[
 					"2007"
 				]
 			]
 		}
 	},
 	{
 		"id": "7MVMBA6K",
 		"type": "article-journal",
 		"title": "A study of the role of visual information in supporting ideation in graphic design",
 		"containerTitle": "Journal of the Association for Information Science and Technology",
 		"page": "1199-1211",
 		"volume": "66",
 		"issue": "6",
 		"source": "Wiley Online Library",
 		"URL": "http://onlinelibrary.wiley.com/doi/10.1002/asi.23231/abstract",
 		"DOI": "10.1002/asi.23231",
 		"ISSN": "2330-1643",
 		"journalAbbreviation": "J Assn Inf Sci Tec",
 		"language": "en",
 		"author": [
 			{
 				"family": "Laing",
 				"given": "Simon"
 			},
 			{
 				"family": "Masoodian",
 				"given": "Masood"
 			}
 		],
 		"issued": {
 			"dateParts": [
 				[
 					"2015",
 					6,
 					1
 				]
 			]
 		},
 		"accessed": {
 			"dateParts": [
 				[
 					"2016",
 					5,
 					24
 				]
 			]
 		}
 	},
 	{
 		"id": "AIM9SRSB",
 		"type": "article-journal",
 		"title": "Content-based image retrieval methods and professional image users",
 		"containerTitle": "Journal of the Association for Information Science and Technology",
 		"page": "350-365",
 		"volume": "67",
 		"issue": "2",
 		"source": "Wiley Online Library",
 		"URL": "http://onlinelibrary.wiley.com/doi/10.1002/asi.23387/abstract",
 		"DOI": "10.1002/asi.23387",
 		"ISSN": "2330-1643",
 		"journalAbbreviation": "J Assn Inf Sci Tec",
 		"language": "en",
 		"author": [
 			{
 				"family": "Beaudoin",
 				"given": "Joan E."
 			}
 		],
 		"issued": {
 			"dateParts": [
 				[
 					"2016",
 					2,
 					1
 				]
 			]
 		},
 		"accessed": {
 			"dateParts": [
 				[
 					"2016",
 					7,
 					7
 				]
 			]
 		}
 	},
 	{
 		"id": "QV9KZVPT",
 		"type": "webpage",
 		"title": "Findings from the Survey, 2011",
 		"URL": "http://alistapart.com/article/survey2011",
 		"author": [
 			{
 				"family": "Staff",
 				"given": "A. L. A."
 			}
 		],
 		"accessed": {
 			"dateParts": [
 				[
 					"2016",
 					11,
 					2
 				]
 			]
 		}
 	},
 	{
 		"id": "E4X2JTB9",
 		"type": "book",
 		"title": "Understanding context: environment, language, and information architecture",
 		"source": "Open WorldCat",
 		"ISBN": "978-1-4493-2317-2",
 		"note": "OCLC: 931778272",
 		"shortTitle": "Understanding context",
 		"language": "English",
 		"author": [
 			{
 				"family": "Hinton",
 				"given": "Andrew"
 			}
 		],
 		"issued": {
 			"dateParts": [
 				[
 					"2015"
 				]
 			]
 		}
 	},
 	{
 		"id": "B3DE3M9J",
 		"type": "book",
 		"title": "Net Work: Ethics and Values in Web Design",
 		"publisher": "Palgrave Macmillan",
 		"publisherPlace": "New York",
 		"numberOfPages": "244",
 		"edition": "2012 edition",
 		"source": "Amazon",
 		"eventPlace": "New York",
 		"ISBN": "978-0-230-23140-5",
 		"shortTitle": "Net Work",
 		"language": "English",
 		"author": [
 			{
 				"family": "Kennedy",
 				"given": "H."
 			}
 		],
 		"issued": {
 			"dateParts": [
 				[
 					"2011",
 					12,
 					15
 				]
 			]
 		}
 	},
 	{
 		"id": "K9NFPFC6",
 		"type": "article-journal",
 		"title": "Media literacy, media education, and the academy",
 		"containerTitle": "Journal of Communication",
 		"page": "5-15",
 		"volume": "48",
 		"issue": "1",
 		"source": "Wiley Online Library",
 		"URL": "http://onlinelibrary.wiley.com.pallas2.tcl.sc.edu/doi/10.1111/j.1460-2466.1998.tb02733.x/abstract",
 		"DOI": "10.1111/j.1460-2466.1998.tb02733.x",
 		"ISSN": "1460-2466",
 		"language": "en",
 		"author": [
 			{
 				"family": "Christ",
 				"given": "W. G."
 			},
 			{
 				"family": "Potter",
 				"given": "W J"
 			}
 		],
 		"issued": {
 			"dateParts": [
 				[
 					"1998",
 					3,
 					1
 				]
 			]
 		}
 	},
 	{
 		"id": "ZAEEKDW8",
 		"type": "chapter",
 		"title": "Critical media literacy, democracy, and the reconstruction of education",
 		"containerTitle": "Media literacy: A reader",
 		"publisher": "Peter Lang Publishing Inc.",
 		"publisherPlace": "New York",
 		"page": "3-23",
 		"eventPlace": "New York",
 		"URL": "https://cxarchive.gseis.ucla.edu/xchange/critical-uses-of-media-and-technology/xpress/critical-media-literacy-democracy-and-the-reconstruction-of-education",
 		"language": "English",
 		"author": [
 			{
 				"family": "Kellner",
 				"given": "Douglas"
 			},
 			{
 				"family": "Share",
 				"given": "Jeff"
 			}
 		],
 		"editor": [
 			{
 				"family": "Macedo",
 				"given": "D."
 			},
 			{
 				"family": "Steinberg",
 				"given": "S. R."
 			},
 		"issued": {
 			"dateParts": [
 				[
 					"2007"
 				]
 			]
 		},
 		"accessed": {
 			"dateParts": [
 				[
 					"2017",
 					6,
 					12
 				]
 			]
 		}
 	},
 	{
 		"id": "CJ4XKNU8",
 		"type": "article-journal",
 		"title": "Human studies and user studies: a call for methodological inter-disciplinarity",
 		"containerTitle": "Information Research",
 		"page": "9–1",
 		"volume": "9",
 		"issue": "1",
 		"author": {
 			"family": "Dervin",
 			"given": "Brenda"
 		},
 		"issued": {
 			"dateParts": [
 				[
 					"2003"
 				]
 			]
 		}
 	},
 	{
 		"id": "XWFJ2RWK",
 		"type": "book",
 		"title": "Becoming Qualitative Researchers: An Introduction",
 		"publisher": "Pearson",
 		"publisherPlace": "Boston",
 		"numberOfPages": "352",
 		"edition": "5 edition",
 		"source": "Amazon",
 		"eventPlace": "Boston",
 		"ISBN": "978-0-13-385939-3",
 		"shortTitle": "Becoming Qualitative Researchers",
 		"language": "English",
 		"author": {
 			"family": "Glesne",
 			"given": "Corrine"
 		},
 		"issued": {
 			"dateParts": [
 				[
 					"2015",
 					1,
 					3
 				]
 			]
 		}
 	},
 	{
 		"id": "88GWJ7CH",
 		"type": "book",
 		"title": "Qualitative Research Design: An Interactive Approach",
 		"publisher": "SAGE Publications, Inc",
 		"publisherPlace": "Thousand Oaks, Calif",
 		"numberOfPages": "232",
 		"edition": "3 edition",
 		"source": "Amazon",
 		"eventPlace": "Thousand Oaks, Calif",
 		"ISBN": "978-1-4129-8119-4",
 		"shortTitle": "Qualitative Research Design",
 		"language": "English",
 		"author": {
 			"family": "Maxwell",
 			"given": "Joseph A."
 		},
 		"issued": {
 			"dateParts": [
 				[
 					"2013",
 					6,
 					8
 				]
 			]
 		}
 	},
 	{
 		"id": "JRTBN6PN",
 		"type": "chapter",
 		"title": "Web industries, economic, aesthetics: mapping the look of the wweb in the dot-com era",
 		"containerTitle": "Web History",
 		"publisher": "Peter Lang Inc., International Academic Publishers",
 		"publisherPlace": "New York",
 		"page": "173-194",
 		"edition": "First printing edition",
 		"source": "Amazon",
 		"eventPlace": "New York",
 		"ISBN": "978-1-4331-0468-8",
 		"language": "English",
 		"editor": {
 			"family": "Brügger",
 			"given": "Niels"
 		},
 		"author": {
 			"family": "Ankerson",
 			"given": "Megan Sapnar"
 		},
 		"issued": {
 			"dateParts": [
 				[
 					"2010",
 					3,
 					4
 				]
 			]
 		}
 	},
 	{
 		"id": "DQGXFN96",
 		"type": "chapter",
 		"title": "Web history, an emerging feild of study",
 		"containerTitle": "Web History",
 		"publisher": "Peter Lang Inc., International Academic Publishers",
 		"publisherPlace": "New York",
 		"page": "1-28",
 		"edition": "First printing edition",
 		"source": "Amazon",
 		"eventPlace": "New York",
 		"ISBN": "978-1-4331-0468-8",
 		"language": "English",
 		"editor": {
 			"family": "Brügger",
 			"given": "Niels"
 		},
 		"author": {
 			"family": "Brügger",
 			"given": "Niels"
 		},
 		"issued": {
 			"dateParts": [
 				[
 					"2010",
 					3,
 					4
 				]
 			]
 		}
 	},
 	{
 		"id": "T6VWA7WP",
 		"type": "article-journal",
 		"title": "A framework of image use among archaeologists, architects, art historians and artists",
 		"containerTitle": "Journal of Documentation",
 		"page": "119–147",
 		"volume": "70",
 		"issue": "1",
 		"author": {
      "authorOne": {
        "family": "E. Beaudoin",
        "given": "Joan"
      }
 		},
 		"issued": {
 			"dateParts": {
        "datePartOne": "2014"
      }
 		}
 	}
];

// 3 - Use a loop to interact with each object in your JSON array
// 4- we get 'list-of-books' from our HTML document and then append various parts of the object literal into the HTML
// 5- .innerHTML adds HTML content into the HTML element we selected
// 6- the += operator appends new HTML data with each pass of the loop
// 7- the + operator at the beginning of each line
for (var i=0; i < wildBookChaseData.length; i++) {
  document.getElementById('list-of-books').innerHTML +=
    '<article class="book" id="wild-book-chase-data-' + wildBookChaseData[i].id + '">'
    + '<h2>Title: ' + wildBookChaseData[i].title + '</h2>'
    + '<h3>Journal: ' + wildBookChaseData[i].containerTitle + '</h3>'
    + '<h4>Volume: ' + wildBookChaseData[i].volume + '</h4>'
    + '<h5>Author: ' + wildBookChaseData[i].author.family + ', ' + wildBookChaseData[i].author.given + '</h5>'
    + '</article>';
}
