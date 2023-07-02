function makeDownloadFile({storage,path}){
    return async function downloadFile({bucketName,fileName}){
        const bucket = storage.bucket(bucketName);
        let   publicPath = path.join(__dirname,"../../public/download");
        const filePath =`${publicPath}/${fileName}`;
        const file   = bucket.file(`trainee-data/vatsal/${fileName}`);
        await file.download({ destination: filePath });
       }    
    }

module.exports=makeDownloadFile;