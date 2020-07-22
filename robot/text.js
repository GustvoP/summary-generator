const algorithmia = require('algorithmia')
const algorithmiaApiKey = require('../credentials/algorithmia.json').apiKey

async function robot(content) {
    await fetchContentFromWikipedia(content)
    sanitizeContent(content)

    async function fetchContentFromWikipedia(content) {
        const algorithmiaAuthenticated = algorithmia(algorithmiaApiKey)
        const wikipediaAlgorithm = algorithmiaAuthenticated.algo("web/WikipediaParser/0.1.2")
        const wikipediaResponse = await wikipediaAlgorithm.pipe(content.searchTerm)
        const wikipediaContent = wikipediaResponse.get()

        content.sourceContentRaw = wikipediaContent.content
    }

    function sanitizeContent(content) {
        const withoutBlankLinesAndMarkdown = removeBlankLinesAndMarkdown(content.sourceContentRaw)
        const withoutDateInParentheses = removeDateInParentheses(withoutBlankLinesAndMarkdown)

        content.sourceContentSanitized = withoutDateInParentheses

        function removeBlankLinesAndMarkdown(text) {
            const allLines = text.split("\n");

            const withoutBlankLinesAndMarkdown = allLines.filter((line) => {
                if (line.trim().length === 0 || line.trim().startsWith("=")) {
                    return false;
                }
                return true;
            });

            return withoutBlankLinesAndMarkdown.join(" ");
        }

        function removeDateInParentheses(text) {
            return text.replace(/\((?:\([^()]*\)|[^()])*\)/gm, "").replace(/  /g, " ");
        }
    }

}

module.exports = robot;
