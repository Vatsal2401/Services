function runKafkaProducer({producer,isUniqueJob,createUniqueJob,message_unique_identifier}){
    return async function runProducer({topic,message}){
       await producer.send({
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