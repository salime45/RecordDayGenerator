const handlebars = require('handlebars');
const fs = require('fs');
const pdf = require('html-pdf');
const data = require('./data');

// const inFile = './report.hbs';
const inFile = './report.html';
const outPdf = './report.pdf';

// const data = {
//   company: "Freddy's Fish Farm",
//   phone: '619-555-1212',
//   owner: {
//     firstName: 'Freddy',
//     lastName: 'Fishman'
//   },
//   rewardsCustomer: true
// };

// const source = fs.readFileSync(inFile, 'utf8');

// const template = handlebars.compile(source, { strict: true });
// const result = template(data);
// console.log(result);
// fs.writeFileSync(outFile, result);

// console.log(data.getDays())
// data to apply to template file
const user = {
  "date": new Date().toISOString(),
  "title": "Guillaume",
  "body": "bodyyyyyyyyy",
  "purchases": data.getDays(2018, 6)
};
const options = {
  "format": 'A4',
  "orientation": "portrait",

};

const source = fs.readFileSync(inFile, 'utf8');
const html = handlebars.compile(source)(user);
// console.log("template compiled with user data", html);

pdf.create(html, options).toFile(outPdf, function (err, res) {
  if (err) {
    console.log(err);
    return response.send("PDF creation error");
  }
  console.log("pdf created locally");

});


