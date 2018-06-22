const handlebars = require('handlebars');
const fs = require('fs');
const pdf = require('html-pdf');
const data = require('./data');

// const inFile = './report.hbs';
const inFile = './report.html';
const outPdf = './report.pdf';

const year = 2018;
const month = 6;

// data to apply to template file
const info = {
  "empresa": {
    "id": "26",
    "name": "Empresa",
    "cif": "B4624530",
    "ccc": "4601612345",
  },
  "trabajador": {
    "id": "26",
    "name": "Trabajador",
    "nif": "B4624530",
    "naf": "4601612345",
  },
  "month": "5",
  "year": "2018",
  "days": data.getDays(year, month)
};

const options = {
  "format": 'A4',
  "orientation": "portrait",

};

const source = fs.readFileSync(inFile, 'utf8');
const html = handlebars.compile(source)(info);
// console.log("template compiled with user data", html);

pdf.create(html, options).toFile(outPdf, function (err, res) {
  if (err) {
    console.log(err);
    return response.send("PDF creation error");
  }
  console.log("pdf created locally");

});


