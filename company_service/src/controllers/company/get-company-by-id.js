module.exports = function makeGetCompanyByIdAction({
    companyUseCase
}){
    return async function getCompanyByIdAction(req,res)
    {
        try {
            const companyId=req.params.id;
            const result=await companyUseCase.getCompanyByIdAction({companyId});
         return   res.status(200).json(result);
        } catch (error) {
            const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
            return res.status(httpStatusCode).json({ error: error.message  });
        }
    }
}