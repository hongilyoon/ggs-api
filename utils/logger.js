var winston = require('winston'); // 로그 모듈
var winstonDaily = require('winston-daily-rotate-file'); //일별 로그 모듈
var moment = require('moment'); // 시간처리 모듈

const logDir = 'logs';

function timeStampFormat() {
    return moment().format('YYYY-MM-DD HH:mm:ss.SSS ZZ')
}

var logger = new (winston.Logger)({
    transports: [
        new (winstonDaily)({
            name: 'info-file',
            filename: `${logDir}/app`,
            datePattern: '_yyyy-MM-dd.log',
            colorize: false,
            maxsize: 50000000,
            maxFiles: 1000,
            level: 'info', // info이상 파일 출력
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        }),
        new (winston.transports.Console)({
            name: 'debug-console',
            colorize: true,
            level: 'debug', // debug이상 콘솔 출력
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        })
    ],
    exceptionHandlers: [ // uncaughtException 발생시 처리
        new (winstonDaily)({
            name: 'exception-file',
            filename: `${logDir}/app-exception`,
            datePattern: '_yyyy-MM-dd.log',
            colorize: false,
            maxsize: 50000000,
            maxFiles: 1000,
            level: 'error',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        }),
        new (winston.transports.Console)({
            name: 'exception-console',
            colorize: true,
            level: 'debug',
            showLevel: true,
            json: false,
            timestamp: timeStampFormat
        })
    ]
});

exports.getLogger = function () {
    return logger;
};











// const winston = require('winston');
// const fs = require('fs');
// const env = process.env.NODE_ENV || 'development';
// const logDir = 'logs';
//
// // Create the log directory if it does not exist
// if (!fs.existsSync(logDir)) {
//     fs.mkdirSync(logDir);
// }
// const tsFormat = () => (new Date()).toLocaleTimeString();
// const logger = new (winston.Logger)({
//     transports: [
//         // colorize the output to the console
//         new (winston.transports.Console)({
//             timestamp: tsFormat,
//             colorize: true,
//             level: 'info'
//         }),
//         new (require('winston-daily-rotate-file'))({
//             filename: `${logDir}/.log`,
//             timestamp: tsFormat,
//             datePattern: 'yyyy-MM-dd',
//             prepend: true,
//             level: env === 'development' ? 'verbose' : 'info'
//         })
//     ]
// });
//
// exports.getLogger = function () {
//     return logger;
// };