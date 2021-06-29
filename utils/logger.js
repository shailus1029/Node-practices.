const winston = require("winston");
const path = require("path");
const fs = require("fs");
const mkdirp = require("mkdirp");
const os = require("os");

function getDirectoryName(type) {
    const date = new Date();
    const dirName = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
    const directory = path.join(process.cwd(), `logs/${type}/${dirName}`);
    return directory;
}

var logger = new winston.createLogger({
    format: winston.format.combine(
        winston.format.json(),
        winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        winston.format.printf(info => `${info.timestamp} | ${info.level} : ${info.message}`)
    )
});

function apiLogger(userId, type) {
    try {
        const logDirectory = getDirectoryName(type);
        fs.existsSync(logDirectory) || mkdirp(logDirectory);
        return logger.remove().add(new winston.transports.File(
            {
                filename: `${logDirectory}/${userId}_logs.log`
            },
            {
                filename: `${logDirectory}/exceptions.log`,
                handleExceptions: true
            }
        ));
    } catch (err) {
        console.log("err ======>>>", err);
        return null;
    }
}

function logData (request, data, execTime, userId, headers = {}) {
    let logDataLogger = apiLogger(userId, 'apiLogs');
    const logMessage =  `REQUEST: ${JSON.stringify(request)} HEADERS: ${JSON.stringify(headers)} RESPONSE: ${JSON.stringify(data)} EXEC-TIME: ${execTime} ms ${os.EOL}`;
    if (logDataLogger) {
        logDataLogger.log('info', logMessage);
    }
}

module.exports = {
    logData
}