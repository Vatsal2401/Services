function makeFilterSessionAction({filterSession,filterQuery,Joi,ValidationError,ForbiddenError }) {
    return async function filterSessionAction({filterObject,orderBy}) {
       const query  = await filterQuery({filterObject,orderBy})
       const result = await filterSession({query})
       return result
    };
  }
  module.exports = makeFilterSessionAction;
  