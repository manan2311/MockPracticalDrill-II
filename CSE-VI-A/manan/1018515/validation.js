//validation
var joi = require("@hapi/joi");

const registerValidation = (data) => {
  var schema = {
    name: joi.string().min(3).required(),
    email: joi.string().min(6).required().email(),
    password: joi.string().min(6).required(),
  };
 return joi.validate(data, schema);

};

