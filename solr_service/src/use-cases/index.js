const employeeUseCase  = require("./employee")
const emailUseCase     = require("./email")
const kafkaUseCase     = require("./kafka")
const gcpUsecase       = require('./gcp')
module.exports=Object.freeze({
      employeeUseCase,
      emailUseCase,
      kafkaUseCase,
      gcpUsecase
})
