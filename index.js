const readline = require("readline-sync");
const robot = {
    text: require("./robot/text.js"),
};
const documento = {
    documen: require("./doc.js"),
};

async function start() {
    const content = {};

    content.searchTerm = askAndReturnSearchTerm();
    content.prefix = askAndReturnPrefix();
    content.lang = askAndReturnLanguage();

    await robot.text(content);
    await documento.documen(content);

    function askAndReturnSearchTerm() {
        return readline.question("Type the search term: ");
    }

    function askAndReturnPrefix() {
        const prefixes = ["Who is", "What is", "The history of"];
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose a option: ')
        const selectedPrefixText = prefixes[selectedPrefixIndex]

        return selectedPrefixText
    }

    function askAndReturnLanguage() {
        const languages = ["PT", "EN", "ES"]
        const selectedLangIndex = readline.keyInSelect(languages, 'Choose the language: ')
        const selectedLangText = languages[selectedLangIndex]

        return selectedLangText
    }
    console.log(content)
}

start()
