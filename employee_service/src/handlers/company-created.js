const { Kafka } = require('kafkajs')
const config =require("../config")
const {employeeUseCase,kafkaUseCase}=require("../use-cases");

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: config.kafka.brokerList
})
const consumer = kafka.consumer({ groupId: 'company-group' })
const run = async () => {
    // Consuming
    await consumer.connect()
    await consumer.subscribe({ topic: 'CompanyCreated', fromBeginning: true })
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
          try {
            const value       =  JSON.parse(message.value.toString())
            const employee_id =  await employeeUseCase.createEmployeeAction({password:value.password,company_name:value.companyName,employeeEmail:value.email,employeeName:value.ownerName,position:value.position})
            console.log(employee_id);
            const produce_message=JSON.stringify({employee_id:employee_id.rows[0].id,company_id:value.company_id})
            await kafkaUseCase.runProducer({message:produce_message,topic:"OwnerCreated"})
            
        } catch (error) {
            console.log(error);
        }
      },
    })
  }
  
  run().catch(console.error)