const config = {
    serviceName: 'auth Service',
    kafkaTopics: {},
    cockroach: {
        host:"localhost",
        port:"26257",
        database:"auth_service",
        username:"vatsal",
        password:"cockroach",
        ssl:true
    },
    serviceEndpointPrefix: '/auth-service'
  };
  module.exports = config;
  