function makeUpdateDocument({searchDocument, Joi,ValidationError,ForbiddenError }) {
  
    return async function searchDocumentFun({name,numShards,configSet }) {
        
        await validateInputData({name,numShards,configSet});
       return await searchDocument({name,numShards,configSet}); 
    };
    async function validateInputData({name,numShards,configSet}) {
      const schema = Joi.object({
        name: Joi.string().min(3).required(),
        numShards: Joi.string().email().required(),
        configSet:Joi.string().min(2).required(),
      });
      const { error,value } = schema.validate({name,numShards,configSet})
      if (error) {
        throw new ValidationError(error.message);
      }
      return value;
    }
  }
  
  module.exports = makeUpdateDocument;
  