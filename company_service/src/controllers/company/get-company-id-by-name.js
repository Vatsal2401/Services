module.exports = function makeGetCompanyIdByNameAction({
    companyUseCase
}){
    return async function getCompanyIdByNameAction(req,res)
    {
        try {
            const companyName = req.params.cname;
            const result=await companyUseCase.getCompanyIdByNameAction({companyName});
            res.status(200).json(result);
        } catch (error) {
            const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
            res.status(httpStatusCode).json({ error: error });
        }
    }

}