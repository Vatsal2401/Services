        const nodemailer=require("nodemailer");
        const {employeeDb}=require("../../data-access-cockroach")
        const config =require("../../config")
        const CLIENT_ID= config.oauth.clientId
        const CLIENT_SECRET=config.oauth.clientSecret
        const REFRESH_TOKEN=config.oauth.refreshToken
        const userEmail=config.oauth.emailId
        const makeSendEmail = require("./send-email")
        const makeVerifyEmail=require("./verify-email")
        const sendEmail = makeSendEmail({nodemailer,CLIENT_ID,CLIENT_SECRET,REFRESH_TOKEN,userEmail})
        const verifyEmail=makeVerifyEmail({verifyEmployeeEmail:employeeDb.verifyEmployeeEmail})
        module.exports=Object.freeze({
            sendEmail,
            verifyEmail
        })