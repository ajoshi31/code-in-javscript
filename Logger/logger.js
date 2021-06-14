const {createLogger, format, transports, config} = require('winston');
const {combine, timestamp, json} = format;

const userLogger = createLogger({
    levels: config.syslog.levels,
    defaultMeta: {component: 'user-service'},
    format: combine(
        timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        json()
    ),

    transports: [
        new transports.Console(),
        new transports.File({filename: 'combined.log'})
    ],
    exceptionHandlers: [
        new transports.Console(),
        new transports.File({ filename: 'combined.log'})
    ]
});
const paymentLogger = createLogger({
    transports: [
        new transports.Console()
    ]
});

module.exports = {
    userLogger: userLogger,
    paymentLogger: paymentLogger
};

