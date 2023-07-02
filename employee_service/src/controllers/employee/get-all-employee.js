module.exports = function makeGetAllEmployeeAction({
    employeeUseCase
}){
    return async function getAllEmployeeAction(req,res)
    {
        try {
           
            const company_name = req.params.cname;
            const result=await employeeUseCase.getAllEmployeeAction({company_name});
            res.status(200).send({success:result})
       } catch (error) {
        const httpStatusCode=error.httpStatusCode ? error.httpStatusCode : 400;
        res.status(httpStatusCode).send({error:error.message});
       }      
    }
}