/**
 * Created by hiyoon on 2017-05-22.
 */
var conn = require('../database/sql/connectionString');
var keysSql = require('../database/sql/keysSql');
var logger = require('../utils/logger');
var utils = require('util')
var cron = require('node-cron');

cron.schedule('10 0 * * *', function () {

    logger.getLogger().info(utils.format('running a task of updating saveUsersStats every time. ' + new Date()));

    // 1일 동안 업데이트 안된 대상 명단 조회
    conn.getConnection(function (err, connection) {
        connection.query(keysSql.initApiKeyCnt, null, function (err, rows) {
            connection.release();

            // 에러 발생시
            if (err) {
                throw err;

            }
        });
    });
}).start();