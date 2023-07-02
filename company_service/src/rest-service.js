const {companyController} = require('./controllers');
const express= require('express');
const router=express.Router();

    router.get('/', (req,res)=>{
        res.send("server is running")
    });
    router.get('/company/companyName/:cname',companyController.getCompanyIdByNameAction );
    router.post('/company', companyController.createCompanyAction);
    router.get('/company',companyController.getAllCompanyAction );
    router.get('/company/:id',companyController.getCompanyByIdAction );
    router.put('/company/:id',companyController.updateCompanyAction );
    router.delete('/company/:id',companyController.deleteCompanyAction);
    router.patch('/company/:id',companyController.updateCompanyById)
module.exports = { router };