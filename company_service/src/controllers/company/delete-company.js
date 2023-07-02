module.exports = function makeDeleteCompanyAction({
    companyUseCase
}){
    return async function deleteCompanyAction(req,res)
    {
        try {
            const companyId=req.params.id;
            await companyUseCase.deleteCompanyAction({companyId})
            res.status(200).json({"success":"deleted"})
        } catch (error) {
            const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
            res.status(httpStatusCode).json({ error: error.message  });
        }
    }
}