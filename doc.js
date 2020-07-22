const fs = require('fs')
const docx = require("docx");
const { Spacing } = require('docx');

const { Document, Packer, Paragraph, TextRun } = docx;

// Create document
const doc = new Document();

// Documents contain sections, you can have multiple sections per document, go here to learn more about sections
// This simple example will only contain one section

async function documento(content) {

    doc.addSection({
        properties: {},
        children: [
            new Paragraph({
                children: [
                    new TextRun(content.searchTerm),
                ]
            }),

            new Paragraph({
                children: [
                    new TextRun(content.sourceContentSanitized),
                ],
            }),
        ],
    });

    // Used to export the file into a .docx file
    await Packer.toBuffer(doc).then((buffer) => {
        fs.writeFileSync("My Document.docx", buffer);
    });
}

module.exports = documento
// Done! A file called 'My First Document.docx' will be in your file system.
