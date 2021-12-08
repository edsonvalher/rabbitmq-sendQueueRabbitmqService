const amqp = require('amqplib/callback_api');
const { log } = require('../helper/tools');

const CONN_URL = "amqp://172.17.0.4:5672";


const sendQueue = () => {
    log("sendQueue", "sending QUEUE");

    amqp.connect(CONN_URL, (connError, connection) => {
        if (connError) {
            throw connError
        }

        connection.createChannel((channelError, channel) => {
            if (channelError) {
                throw channelError
            }
            const QUEUE = "user-messages";

            channel.assertQueue(QUEUE);
            channel.sendToQueue(QUEUE, Buffer.from('{"state": true,"message": "Hello world"}'));
            //console.log(`Message sent to ${QUEUE}`);
            log("sendQueue", `Message sent to ${QUEUE}`);

        })
    })
}

module.exports = {
    sendQueue,
}