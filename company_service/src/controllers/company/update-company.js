module.exports = function makeUpdateCompanyAction({
   companyUseCase
}){
    return async function updateCompanyAction(req,res)
    {
        try {
            const companyId   = req.params.id;
            const companyName = req.body.companyName;
            const result      = await companyUseCase.updateCompanyAction({companyName,companyId})
            res.status(200).send({"success":"updated","result":result})
        } catch (error) {
            const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
            res.status(httpStatusCode).json({ error: error.message  });
        }
    }
}