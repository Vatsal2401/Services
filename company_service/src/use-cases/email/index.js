        const config=require("../../config")
        const nodemailer=require("nodemailer");
        const CLIENT_ID= config.oauth.clientId
        const CLIENT_SECRET=config.oauth.clientSecret
        const REFRESH_TOKEN=config.oauth.refreshToken
        const userEmail=config.oauth.emailId
        const makeSendEmail = require("./send-email")
        const sendEmail = makeSendEmail({nodemailer,CLIENT_ID,CLIENT_SECRET,REFRESH_TOKEN,userEmail})
        module.exports=Object.freeze({
            sendEmail
        })