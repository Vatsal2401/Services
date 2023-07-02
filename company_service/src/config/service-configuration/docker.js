const config = {
    serviceName: 'company Service',
    kafkaTopics: {},
    cockroach: {
        host:"cockroachdb-0",
        port:"26257",
        database:"company_service",
        username:"root",
        password:"",
        ssl:false
    },
    serviceEndpointPrefix: '/company-service'
  };
  module.exports = config;