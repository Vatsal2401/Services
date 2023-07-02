const config = {
    kafka: {
      host: '127.0.0.1',
      port: 9092,
      brokerList: ['localhost:9092'],
    },
    oauth:{
      emailId:"vatsalpatel9393@gmail.com",
      clientId:"448903819766-4nk6jqhb2mspgsgkomq0ve37fdqjtuce.apps.googleusercontent.com",
      refreshToken:"1//04NlmrQakB1jdCgYIARAAGAQSNwF-L9IreAPL4hsuprNeFb2qvwgafUydrzoJi6BXfmjCVO_lXbdXmdXw6WUylglegGlpbR9XLN8",
      clientSecret:"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"
    },
    gcp:{
      projectId:"experro-dev",
      bucketName:"experro-dev",
      folderName:"trainee-data",
      keyFilename:"",
    }
  };
  module.exports = config;
  