/**
 * Setup the winston logger.
 *
 * Documentation: https://github.com/winstonjs/winston
 */

const { createLogger, format, transports } = require('winston');

module.exports.logger = createLogger({
    level: 'info',
    format: format.json(),
    transports: [
        //
        // - Write to all logs with level `info` and below to `combined.log` 
        // - Write all logs error (and below) to `error.log`.
        //
        new transports.File({ filename: 'error.log', level: 'error' }),
        new transports.File({ filename: 'combined.log' })
    ]
});