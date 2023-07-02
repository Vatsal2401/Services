function makeDeleteCollection({ Joi,deleteCollection,ValidationError }) {
  
    return async function deleteCollectionFun({name}) {
      await validateInputData({name});  
      return await deleteCollection({name});
  
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
  
  module.exports = makeDeleteCollection;
  