const { Kafka } = require('kafkajs')
const {employeeService}=require("../internal-service-call")
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['kafka:9092']
})
const consumer = kafka.consumer({ groupId: 'test-group' })
const run = async () => {
    // Consuming
    await consumer.connect()
    await consumer.subscribe({ topic: 'CompanyDeleted', fromBeginning: true })
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
          await employeeService.deleteAllEmployeeOfCompany({companyId:message.value.toString().companyId})
      },
    })
  }
  
  run().catch(console.error)