function makeCompanyController({companyUseCase,Joi}){

    return Object.freeze({
        getAllcompany,
        getCompanyById,
        createCompany,
        updateCompany,
        deleteCompany,
        getCompanyIdByName
    })
    
    async function getAllcompany (req,res){
             
    }
     async function getCompanyById(req,res){
        try {
                const companyId=req.params.id;
                const result=await companyUseCase.getCompanyByIdAction({companyId});
                console.log(result);
             return   res.status(200).json(result);
            } catch (error) {
                return res.status(400).json({ error: error.message  });
            }
    }
    async function getCompanyIdByName(req,res){
        try {
                const companyName = req.params.cname;
                console.log(companyName);
                const result=await companyUseCase.getCompanyIdByNameAction({companyName});
                console.log(result);
                res.status(200).json(result);
            } catch (error) {
                return res.status(400).json({ error: error });
            }
    }
     async function createCompany(req,res){
        try {
            const companyName=req.body.companyName;     
          const results= await  companyUseCase.createCompanyAction({companyName})
          return  res.status(201).json({success:results[0]})
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    }
    async function deleteCompany(req,res){
        try {
            const companyId=req.params.id;
            const result=await companyUseCase.deleteCompanyAction({companyId})
            res.status(200).json({"success":"deleted","result":result})
        } catch (error) {
            console.log(error);
            res.status(400).json({ error: error.message  });
        }
    }
    async function updateCompany(req,res){
        try {
            const companyId   = req.params.id;
            const companyName = req.body.companyName;
            const result=await companyUseCase.updateCompanyAction({companyName,companyId})
            res.status(200).send({"success":"updated","result":result})
        } catch (error) {
            console.log(error);
            res.status(400).json({ error: error.message  });
        }
    } 
}

module.exports=makeCompanyController