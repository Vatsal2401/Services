const sessionController=require("./session")
const authController =require("./auth")
const roleController=require("./role")
const controller = Object.freeze({
    sessionController,
    authController,
    roleController
  });
  module.exports=controller;