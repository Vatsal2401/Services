function makeGetAllCompany({ getAllCompany, Joi, isCompanyExist,ValidationError,ObjectAlreadyExistError }) {
  
    return async function getAllCompanyFun({ }) {
      //get all company db function 
      const result = await getAllCompany({});
      return result;
    };
  }
  
  module.exports = makeGetAllCompany;
  