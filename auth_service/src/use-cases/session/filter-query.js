function makeFilterQueryAction({Joi,ValidationError,ForbiddenError }) {
    return async function filterQueryAction({filterObject,orderBy}) {
      let query = 'select * from sessions';
      const filterKeys = Object.keys(filterObject);
      if (filterKeys.length > 0) {
        const conditions = filterKeys.map(key => `${key} = '${filterObject[key]}'`);
        const whereClause = conditions.join(' and ');
        query += `  where ${whereClause} ${orderBy?"order by":""} ${orderBy?orderBy:""}`;
      }
       return query
    };
  }
  module.exports = makeFilterQueryAction;
  