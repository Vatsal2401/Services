const {sessionController, authController,roleController} = require('./controllers');
const express= require('express');
const authorizeUser=require("./middleware/authorize-user")
const hasRole=require("./middleware/has-role")
const router=express.Router();
    router.get('/', (req,res)=>{
        res.send("server is running")
    });
    router.post('/authorize-user',authController.authorizeUserAction)
    router.post('/session', sessionController.createSessionAction);
    router.post('/session/filter',authorizeUser('SESSION.FILTER'),sessionController.filterSessionAction)
    router.patch('/session/:id',sessionController.updateSessionAction );
    router.delete('/session/logout',sessionController.logoutSessionAction );
    router.post('/role',hasRole('master','admin'),roleController.addRoleAction);
    router.get('/role/:id',roleController.getRoleByIdAction);
    router.get('/role',roleController.getAllRoles)
    router.put('/role',roleController.updateRole)
    router.patch('/role',roleController.addPermission)
    router.post('/role/assign',hasRole('master'),roleController.assignRoleAction);
    router.delete('/role/:id',roleController.deleteRole)
module.exports = { router };
