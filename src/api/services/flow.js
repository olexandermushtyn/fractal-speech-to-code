const recognizeCommand = require('./recognizeCommand')
const parseSimpleAction = require('./parseSimpleAction')

const commandMethodMap = {
  simpleAction: parseSimpleAction
}

const command = 'I want to add column into row with id 8'
recognizeCommand(command).then((result) => {
  const commandType = result.classifications[0].intent
  commandMethodMap[commandType](command).then((result) => {
    console.log(result)
  })
})
