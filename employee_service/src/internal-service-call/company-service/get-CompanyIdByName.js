function makeGetCompanyIdByName({axios, config}) {
    return async function getCompanyIdByName({
     companyName
    }) {
      const companyId = await axios({
        method: 'get',
        baseURL: `${config.serviceEndpoints.company}`,
        // baseURL: `http://localhost:3000`,
        url: `/company/companyName/${companyName}`,
      });
      return companyId.data?companyId.data.id:undefined;
    };
  }
  
  module.exports = makeGetCompanyIdByName;
  