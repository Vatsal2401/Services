function makeUploadFile({storage,path}){
    return async function uploadFile({bucketName,fileName}){

        const bucket   = storage.bucket(bucketName,fileName);
        let  publicPath = path.join(__dirname,"../../public/upload");
        const filePath =`${publicPath}/${fileName}`;
        const options  =  {
            destination: `trainee-data/vatsal/${fileName}`,
          }
        return await bucket.upload(filePath,options);
       }    
    }
module.exports=makeUploadFile;