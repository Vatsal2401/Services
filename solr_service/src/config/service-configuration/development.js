const config = {
    serviceName: 'employee Service',
    kafkaTopics: {},
    cockroach: {
        host:"localhost",
        port:"26257",
        database:"employee_service",
        username:"vatsal",
        password:"cockroach",
        ssl:true
    },
    serviceEndpointPrefix: '/employee-service'
  };
  module.exports = config;
  