const axios = require('axios');
const config = require('../../config');
const makeCreateCollection = require('./create-collection');
const createCollection = makeCreateCollection({axios, config});

const makeDeleteCollection = require('./delete-collection');
const deleteCollection = makeDeleteCollection({axios, config});

const makeGetAllCollection = require('./get-all-collection');
const getAllCollection = makeGetAllCollection({axios, config});

module.exports = {
    getAllCollection,
    createCollection,
    deleteCollection
};
