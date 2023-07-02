const { Kafka } = require('kafkajs')
const config =require("../../config")
const kafka = new Kafka({
    clientId: "my-app",
    brokers:config.kafka.brokerList
  });
  
const producer = kafka.producer()
producer.connect()
const runKafkaProducer = require("./run-producer")

const runProducer      = runKafkaProducer({producer})
module.exports=Object.freeze({
    runProducer,
})