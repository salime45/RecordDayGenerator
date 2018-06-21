const handlebars = require('handlebars');
const fs = require('fs');
const pdf = require('html-pdf');

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


// data to apply to template file
const user = {
  "date": new Date().toISOString(),
  "title": "Guillaume",
  "body": "bodyyyyyyyyy",
  "purchases": [
    {
      "product": "pro",
      "quantity": "5",
      "formatDateTime ": "5",
      "x ": "5"
    }, {
      "product": "prosdf",
      "quantity": "534",
      "formatDateTime ": "5",
      "x ": "5"
    }
  ]
};
const options = {
  "format": 'A4',
  "orientation": "landscape",

};
// const localTemplate = path.join(os.tmpdir(), 'localTemplate.html');
// const localPDFFile = path.join(os.tmpdir(), 'localPDFFile.pdf');

const source = fs.readFileSync(inFile, 'utf8');
const html = handlebars.compile(source)(user);
console.log("template compiled with user data", html);

pdf.create(html, options).toFile(outPdf, function (err, res) {
  if (err) {
    console.log(err);
    return response.send("PDF creation error");
  }
  console.log("pdf created locally");

});


// const myPdfFile = admin.storage().bucket().file('/test/Arbeitsvertrag.pdf');
// const doc = new pdfkit();
// const stream = doc.pipe(myPdfFile.createWriteStream());
// doc.fontSize(25).text('Test 4 PDF!', 100, 100);
// doc.end();