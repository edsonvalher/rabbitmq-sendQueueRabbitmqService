
const { response, request } = require('express');
const { sendQueue } = require("../queues/MQService");

const obtener = async (req = request, res = response) => {

    sendQueue();

    res.status(200).json({
        state: true,
        message: "Hello world"
    })

}

module.exports = {
    obtener
}