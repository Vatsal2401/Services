const {employeeController,gcpController} = require('./controllers');
const express= require('express');
const authorizeUser=require("./middleware/authorize-user")
const router=express.Router();
const multer=require("multer")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `${__dirname}/public/upload`)
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname)
    }
})
const upload = multer({ storage: storage })
    router.get('/', (req,res)=>{
        res.send("server is running")
    });
    router.post('/file/upload',upload.single('upload'),gcpController.uploadFileAction)
    router.post(`/file/download`,gcpController.downloadFileAction)
    router.post('/login/employee',employeeController.loginEmployeeAction)
    router.post('/employee', employeeController.createEmpoyeeAction);
    router.get('/employee/companyName/:cname',employeeController.getAllEmpoyeeAction );
    router.get('/employee/:id',employeeController.getEmpoyeeByIdAction );
    router.delete('/logout/employee',employeeController.logoutEmployeeAction );
    router.get('/employee/verify/:id',employeeController.verifyEmployeeEmailAction );
    router.put('/employee',employeeController.updateEmpoyeeAction );
    router.delete('/employee/:id',employeeController.deleteEmpoyeeAction);
    router.delete('/employee/companyId/:id',employeeController.deleteEmpoyeeOfCompanyAction);
module.exports = { router };