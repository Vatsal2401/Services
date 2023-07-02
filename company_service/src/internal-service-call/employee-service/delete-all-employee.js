function makeDeleteAllEmployeeOfCompany({axios, config}) {
    return async function deletAllEmployeeOfCompany({
        companyId
    }) {

      try {
        const res = await axios({
          method: 'delete',
          // baseURL: `${config.serviceEndpoints.employee}`,
          baseURL: `${config.serviceEndpoints.employee}`,
          url: `/employee/companyId/${companyId}`,
        });
        return res;
      } catch (error) {
        throw new Error("Internal Service Error")
      }
      
    };
  }
  
  module.exports = makeDeleteAllEmployeeOfCompany;
  