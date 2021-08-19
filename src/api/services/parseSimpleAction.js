const keywordExtractor = require('keyword-extractor')
const fs = require('fs')

var Typo = require('typo-js')
var dictionary = new Typo('en_US')

const entitiesContent = fs.readFileSync('./src/api/trainedModels/entities.nlp')

const entities = JSON.parse(entitiesContent)

async function parseSimpleAction(command) {
  // TODO as an idea - implement NOUN, VERB detectors
  const extractionResult = keywordExtractor.extract(command, {
    language: 'english',
    remove_digits: false,
    return_changed_case: true,
    remove_duplicates: false
  })
  const result = {}

  extractionResult.forEach((word) => {
    if (isNumeric(word)) {
      result['id'] = word
    }
    if (entities[word]) {
      if (!result[entities[word]]) result[entities[word]] = word
    } else {
      // TODO Check typo here
    }
  })
  return result
}
function isNumeric(value) {
  return /^-?\d+$/.test(value)
}
// parseSimpleAction("I want to add fantastic row").then((result) => {
//   console.log(result);
// });

module.exports = parseSimpleAction
