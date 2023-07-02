const { Kafka } = require('kafkajs')
const config =require("../config")
const {roleUseCase}=require("../use-cases");
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: config.kafka.brokerList
})
const permission = {"session":{
        "read":true,
        "create":true,
        "update":true,
        "delete":true,
        "filter":true
      },
      "employee":{
         "read":true,
        "create":true,
        "update":true,
        "delete":true
      },
     "company":{
         "read":true,
        "create":true,
        "update":true,
        "delete":true
      }
     }
const consumer = kafka.consumer({ groupId: 'owner-group' })
const run = async () => {
    // Consuming
    await consumer.connect()
    await consumer.subscribe({ topic: 'OwnerCreated', fromBeginning: true })
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
         const value       =  JSON.parse(message.value.toString())
         await roleUseCase.addRole({company_id:value.company_id,employee_id:value.employee_id,is_master:true,name:"master",permission:JSON.stringify(permission)})
      },
    })
  }
  
  run().catch(console.error)