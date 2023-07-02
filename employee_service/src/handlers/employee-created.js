const { Kafka } = require('kafkajs')
const config =require("../config")
const {emailUseCase}=require("../use-cases");
const sendEmail=emailUseCase.sendEmail
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: config.kafka.brokerList
})
const consumer = kafka.consumer({ groupId: 'test-group' })
const run = async () => {
    // Consuming
    await consumer.connect()
    await consumer.subscribe({ topic: 'EmployeeCreated', fromBeginning: true })
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        await sendEmail({recipientEmail:message.value.toString()})
      },
    })
  }
  
  run().catch(console.error)