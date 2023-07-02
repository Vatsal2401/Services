const { Kafka } = require('kafkajs')
const {emailUseCase}=require("../use-cases");
const sendEmail=emailUseCase.sendEmail
const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092']
})
const consumer = kafka.consumer({ groupId: 'test-group1' })
const run = async () => {
    // Consuming
    await consumer.connect()
    await consumer.subscribe({ topic: 'EmployeeCreated', fromBeginning: true })
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        await sendEmail({recipientEmail:"jenishpatel192@gmail.com",message:`Employee Created Email Id is ${message.value.toString()}`})
      },
    })
  }
  
  run().catch(console.error)