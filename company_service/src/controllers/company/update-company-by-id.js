module.exports = function makeUpdateCompanyByIdAction({
    companyUseCase
 }){
     return async function updateCompanyByIdAction(req,res)
     {
         try {
             const companyId   = req.params.id;
             const columnValues = req.body;
             const result      = await companyUseCase.updateCompanyById({columnValues,companyId})
             res.status(200).send({"success":"updated","result":result})
         } catch (error) {
             const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
             res.status(httpStatusCode).json({ error: error.message  });
         }
     }
 }