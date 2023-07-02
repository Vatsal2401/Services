function runKafkaProducer({producer}){
    return async function runProducer({topic,message}){
       return await producer.send({
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