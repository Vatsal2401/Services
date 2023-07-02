const express =require('express');
const device=require("express-device")
const bodyParser = require('body-parser');
const app=express();
app.use(device.capture());
app.use(bodyParser.urlencoded({ extended: false }))
const {router}=require('./rest-service')
const port=3001;
app.use(express.json());
app.use("/",router)
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
