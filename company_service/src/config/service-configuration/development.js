const config = {
    serviceName: 'company Service',
    kafkaTopics: {},
    cockroach: {
        host:"localhost",
        port:"26257",
        database:"company_service",
        username:"vatsal",
        password:"cockroach",
        ssl:true
    },
    serviceEndpointPrefix: '/company-service'
  };
  module.exports = config;
  