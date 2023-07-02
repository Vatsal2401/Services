const axios = require('axios');
const config = require('../../config');

const makeGetCompanyIdByCompanyName = require('./get-CompanyIdByName');
const getCompanyIdByCompanyName = makeGetCompanyIdByCompanyName({axios, config});

module.exports = Object.freeze({
    getCompanyIdByCompanyName,
});
