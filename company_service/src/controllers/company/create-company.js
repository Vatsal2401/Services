module.exports = function makecreateCompanyAction({
    companyUseCase
}){
    return async function createCompanyAction(req,res)
    {
        try {
            const {companyName,ownerName,email,position,password}=req.body;
            const results= await  companyUseCase.createCompanyAction({companyName,ownerName,email,position,password})
            res.status(201).json({success:results[0]})
        } catch (error) {
           const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
           res.status(httpStatusCode).json({ error: error });
        }
    }
}