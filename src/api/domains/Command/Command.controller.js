const CommandService = require('./Command.service');
const httpStatus = require('http-status');

class CommandController {
  constructor() {}

  getHtml(req, res) {
    const { str, param2 } = req.body

    const service = new CommandService()
    
    console.log(req.body)
    let html = {
      zaza: 124
    }

    // Sending response
    //status(httpStatus[200]).
    res.status(200).send(html)
  }
}

module.exports = CommandController;
