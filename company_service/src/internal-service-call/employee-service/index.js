const axios = require('axios');
const config = require('../../config');

const makedeleteAllEmployeeOfCompany = require('./delete-all-employee');
const deleteAllEmployeeOfCompany = makedeleteAllEmployeeOfCompany({axios, config});

module.exports = Object.freeze({
    deleteAllEmployeeOfCompany,
});
