require('colors');
const moment = require('moment-timezone');


const log = (logger_name, message, level = "INFO", data) => {
    const fecha = moment().utc("America/Guatemala").format();
    const fecha_actual = new Date(fecha);
    const time_stamp = fecha_actual.getTime();
    let logmessage = {
        timestamp: time_stamp,
        message,
        logger_name,
        thread_name: `starting node app.js : pid ${process.pid}`,
        level,
        data,
    }
    switch (level) {
        case "INFO":
            console.info(`${JSON.stringify(logmessage)}`.green);
            break;
        case "WARN":
            console.warn(`${JSON.stringify(logmessage)}`.yellow);
            break;
        case "ERROR":
            console.error(`${JSON.stringify(logmessage)}`.red);
            break;
        case "DEBUG":
            console.debug(`${JSON.stringify(logmessage)}`.cyan);
            break;
        default:
            console.log(`${JSON.stringify(logmessage)}`.gray);
            break;
    }

}

module.exports = {
    log,
}