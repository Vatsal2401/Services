function makeSendEmailAction({nodemailer,CLIENT_ID,CLIENT_SECRET,REFRESH_TOKEN,userEmail}) {
    return async function sendEmail({recipientEmail}) {
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
                    text:`http://localhost:3001/employee/verify/${recipientEmail}`,
                    html:`<h4>http://localhost:3001/employee/verify/${recipientEmail}</h4>`
                }
                console.log(mailOptions);
                const result =transport.sendMail(mailOptions)
                return result
            } catch (error) {
              throw new Error("Error In Sending Email")
            }
    };
  }
  
  module.exports = makeSendEmailAction;
  