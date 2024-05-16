const {createLogger, transports, format} = require ("winston");
const {combine, timestamp, simple, colorize, printf, label} = format;

const printLogFormat = {
    file: combine(
    label({
        label: "backend",
    }),
    timestamp({
        format: "DD-MM-YYYY HH:mm:dd"
    }),
    printf(({timestamp, label, level, message})=> {
        return `${timestamp} [${label}] ${level} : ${message}`;
    }),
  ),
  console: combine(
     colorize(),
     simple()
  ),
};

const opts = {
    file: new transports.File({
        filename: "access.log",
        dirname: "./logs",
        level: "info",
        format: printLogFormat.file,
        }),
    console: new transports.Console({
        level: "info",
        format: printLogFormat.console,
        
    }),
}

const logger = createLogger({
    transports: [opts.file],
});

if (process.env.NODE_ENV !== "production") {
    logger.add(opts.console)
}

logger.stream = {
    write: (msg) => logger.info(msg)
}

module.exports = logger;