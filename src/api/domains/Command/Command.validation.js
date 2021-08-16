const Joi = require("joi");

// Example below
const methodName = {
  body: {
    param1: Joi.string().required(),
    param2: Joi.string(),
  },
};

module.exports = {
  methodName,
};
