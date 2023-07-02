function runKafkaProducer({producer}){
    return async function runProducer({topic,message}){
       const result=  await producer.send({
          topic,
          messages: [
            { 
                value:message 
            },
          ],
        })
       }    
    }
module.exports=runKafkaProducer;