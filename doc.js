const fs = require('fs')
const docx = require("docx");
const { Spacing, HeadingLevel, AlignmentType } = require('docx');

const { Document, Packer, Paragraph, TextRun } = docx;

const doc = new Document();

async function documento(content) {

    doc.addSection({
        properties: {},
        children: [
            new Paragraph({
                text: content.searchTerm,
                heading: HeadingLevel.HEADING_1,
                alignment: AlignmentType.CENTER,
                spacing: {
                    after: 200
                }
            }),

            new Paragraph({
                text: content.sourceContentSanitized,
                alignment: AlignmentType.JUSTIFIED
            }),
        ],
    });

    await Packer.toBuffer(doc).then((buffer) => {
        fs.writeFileSync("My Document.docx", buffer);
    });
}

module.exports = documento
