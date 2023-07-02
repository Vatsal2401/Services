const express =require('express');
const app=express();
const {router}=require('./rest-service')
const port=3003;
app.use(express.json());
app.use("/",router)
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
