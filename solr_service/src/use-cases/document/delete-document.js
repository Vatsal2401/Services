function makeDeleteDocument({ Joi,deleteDocument,ValidationError }) {
  
    return async function deleteDocumentFun({name}) {
      await validateInputData({name});  
      return await deleteDocument({name});
  
    };
    async function validateInputData({name}) {
      const schema = Joi.object({
        name:Joi.string().required(),
      });
      const { error,value } = schema.validate({name});
      if (error) {
        throw new ValidationError(error.message);
      }
      return value;
      
    }
  }
  
  module.exports = makeDeleteDocument;
  