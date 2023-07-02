const axios = require('axios');
const config = require('../../config');
const makeAuthorizeUser = require('./authorize-user');
const authorizeUser = makeAuthorizeUser({axios, config});
const makeLogoutSession =require("./logout-session")
const logoutSession     = makeLogoutSession({axios,config})
const makeCreateSession = require("./create-session")
const createSession     = makeCreateSession({axios,config})

module.exports = {
  logoutSession,
  createSession,
  authorizeUser,
};
