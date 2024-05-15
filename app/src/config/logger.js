const {createLogger, transports, format} = require ("winston");
const {combine, timestamp, json, simple, colorize, printf, label} = format;

const printLogFormat = combine(
                label({
                    label: "backend",
                }),
                colorize(),
                timestamp({
                    format: "DD-MM-YYYY HH:mm:dd"
                }),
                printf(({timestamp, label, level, message})=> {
                    return `${timestamp} [${label}] ${level} : ${message}`;
                }),
            );

const logger = createLogger({
    transports: [
        new transports.Console({
            level: "info",
            format: printLogFormat,
            
        }),
    ],
});

module.exports = logger;