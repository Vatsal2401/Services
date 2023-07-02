const {gcpUsecase}=require("../../use-cases");

const makeDownloadFileAction = require('./download-file');
const downloadFileAction = makeDownloadFileAction({
   gcpUsecase
})
const makeUploadFileAction = require('./upload-file');
const uploadFileAction = makeUploadFileAction({gcpUsecase})
module.exports=Object.freeze({
    downloadFileAction,
    uploadFileAction
});