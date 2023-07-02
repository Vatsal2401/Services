function makeGetCompanyById({axios, config}) {
    return async function getCompanyById({
     companyId
    }) {
      const companyId = await axios({
        method: 'get',
        // baseURL: `http://localhost:3000`,
        baseURL: `${config.serviceEndpoints.company}`,
        url: `/company/${companyId}`,
      });
      return companyId.data;
    };
  }
  
  module.exports = makeGetCompanyById;
  