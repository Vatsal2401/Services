const ValidationError = require('./validation.error');
const forbiddenError = require('./forbidden.error');
const dbError=require("./db.error");
const objectAlreadyExistError=require("./object-already-exist.error")
module.exports = {
  ValidationError,
  forbiddenError,
  dbError,
  objectAlreadyExistError
};
