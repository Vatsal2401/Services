const config = {
    serviceName: 'auth Service',
    kafkaTopics: {},
    cockroach: {
        host:"cockroachdb-0",
        port:"26257",
        database:"auth_service",
        username:"root",
        password:"",
        ssl:false
    },
    serviceEndpointPrefix: '/auth-service'
  };
  module.exports = config;
  