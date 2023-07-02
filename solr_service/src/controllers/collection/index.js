const {collectionUseCase}=require("../../use-cases");
const makeCreateCollectionAction = require('./create-collection');
const createCollectionAction = makeCreateCollectionAction({
    collectionUseCase
})
const makeDeleteCollectionAction=require('./delete-collection');
const deleteCollectionAction = makeDeleteCollectionAction({
    collectionUseCase
})

const makeGetAllCollectionAction = require("./get-all-collections")
const getAllCollectionAction = makeGetAllCollectionAction({
    collectionUseCase
})

module.exports=Object.freeze({
        createCollectionAction,
        deleteCollectionAction,
        getAllCollectionAction,
    })





