function makeCreateCompany({kafka, createCompany,getCompanyIdByName, Joi,ValidationError,ObjectAlreadyExistError }) {
  
  return async function createCompanyFun({ companyName,ownerName,email,position,password}) {
// validate company detail Joi Validation 
    await validateInputData({companyName});
//  cheack company is already exist with same name DATABASE VALIDATION
   const isCompanyExist=await getCompanyIdByName({companyName})
   if(isCompanyExist){
    throw new ObjectAlreadyExistError("Company With This Name Already Exist")
   }
     const companyId = await createCompany({ companyName });
     const produceMessage    = JSON.stringify({ownerName,email,position,password,companyName,companyId})
     await kafka.runProducer({message:produceMessage,topic:"CompanyCreated"})
   //create company with company details 
    return "company_created"
  };
  async function validateInputData({companyName}) {
    const schema = Joi.object({
      companyName:Joi.string().min(3).required(),
    });
    const { error,value } = schema.validate({companyName});
    if (error) {
      throw new ValidationError(error.message);
    }
    return value;
  }
}

module.exports = makeCreateCompany;
