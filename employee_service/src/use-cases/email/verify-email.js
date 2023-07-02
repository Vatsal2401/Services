function makeSendEmailAction({verifyEmployeeEmail}) {
    return async function verifyEmail({employeeEmail}) { 
                return   await verifyEmployeeEmail({employeeEmail})
    };
  }
  module.exports = makeSendEmailAction;
  