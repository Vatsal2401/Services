const {Storage} = require('@google-cloud/storage');
const config =require("../../config")
const storage = new Storage({
    projectId: config.gcp.projectId,
    bucketName: config.gcp.bucketName,
    keyFilename: `${__dirname}/gcp-service-account-key.json`,
    folderName:config.gcp.folderName
  });
  const path             = require("path")
  const makeDownloadFile = require("./download-file")
  const makeUploadFile   = require("./upload-file")
  const downloadFile     = makeDownloadFile({storage,path})
  const uploadFile       = makeUploadFile({storage,path})

  module.exports=Object.freeze({
    downloadFile,
    uploadFile
})