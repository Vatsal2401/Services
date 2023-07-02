const {documentUseCase}=require("../../use-cases");
const makeUploadDocumentAction = require('./upload-document');
const uploadDocumentAction = makeUploadDocumentAction({
    documentUseCase
})

const makeSearchDocumentAction=require('./search-document');
const searchDocumentAction = makeSearchDocumentAction({
    documentUseCase
})

module.exports=Object.freeze({
        uploadDocumentAction,
        searchDocumentAction,
    })





