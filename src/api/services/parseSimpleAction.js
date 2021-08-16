const keywordExtractor = require("keyword-extractor");
const fs = require("fs");

var Typo = require("typo-js");
var dictionary = new Typo("en_US");

const entitiesContent = fs.readFileSync("./src/api/trainedModels/entities.nlp");

const entities = JSON.parse(entitiesContent);

async function parseSimpleAction(command) {
  const extractionResult = keywordExtractor.extract(command, {
    language: "english",
    remove_digits: true,
    return_changed_case: true,
    remove_duplicates: false,
  });
  const result = {};
  extractionResult.forEach((word) => {
    if (entities[word]) {
      result[entities[word]] = word;
    } else {
      // Check typo here
    }
  });
  return result;
}
// parseSimpleAction("I want to add fantastic row").then((result) => {
//   console.log(result);
// });

module.exports = parseSimpleAction;
