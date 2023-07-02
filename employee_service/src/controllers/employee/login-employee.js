module.exports = function makeLoginEmployeeAction({
    employeeUseCase
}){
    return async function loginEmployeeAction(req,res)
    {
        try {
            const employeeEmail    = req.body.employeeEmail;
            const employeePassword = req.body.position; 
            const user_agent       = req.headers['user-agent'];
            const device           = req.device.type;
            const ip_address       = req.socket.remoteAddress;
            const result           = await employeeUseCase.loginEmployee({employeeEmail,employeePassword,user_agent,device ,ip_address})
            res.status(200).json({"success":"employee login successfully","credentials":result})
        } catch (error) {
            const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
            res.status(httpStatusCode).json({ error: error.message });
        }
    }
}