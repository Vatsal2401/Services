function makeSendEmailAction({nodemailer,CLIENT_ID,CLIENT_SECRET,REFRESH_TOKEN,userEmail}) {
    return async function sendEmail({recipientEmail,message}) {
            try {
                const transport=nodemailer.createTransport({
                    service:'gmail',
                    auth:{
                        type:'OAuth2',
                        user:userEmail,
                        clientId:CLIENT_ID,
                        clientSecret:CLIENT_SECRET,
                        refreshToken:REFRESH_TOKEN,
                    }
                })
                const mailOptions={
                    from:`Tech2401<${userEmail}>`,
                    to:`${recipientEmail}`,
                    subject:"Account Created",
                    text:message,
                    html:`<h1>${message} </h1>`
                }
                // console.log();
                const result =transport.sendMail(mailOptions)
                return result
            } catch (error) {
               console.log(error);
            }
    };
  }
module.exports = makeSendEmailAction;
  