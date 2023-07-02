const config = {
    serviceName: 'employee Service',
    kafkaTopics: {},
    cockroach: {
        host:"cockroachdb-0",
        port:"26257",
        database:"employee_service",
        username:"root",
        password:"",
        ssl:true
    },
    serviceEndpointPrefix: '/employee-service'
  };
  module.exports = config;
  