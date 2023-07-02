module.exports = function makeGetAllCompanyAction({
    companyUseCase
}){
    return async function getAllCompanyAction(req,res)
    {
        try {
            const result=await companyUseCase.getAllCompanyAction({});
            res.status(200).json(result);
       } catch (error) {
            const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
            res.status(httpStatusCode).json({ error: error.message  });
       } 
    }
}