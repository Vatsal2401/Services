const {collectionController,documentController} = require('./controllers');
const express= require('express');
const authorizeUser=require("./middleware/authorize-user")
const router=express.Router();

    router.post('/collection',collectionController.createCollectionAction)
    router.delete(`/collection`,collectionController.deleteCollectionAction)
    router.get('/collection',collectionController.getAllCollectionAction)
    router.post('/document', documentController.uploadDocumentAction);
    router.get('/document',documentController.searchDocumentAction );

module.exports = { router };