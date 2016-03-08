'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  log_sql: true,
  log_connect: true,
  adapter: {
    mysql: {
      host: '192.168.20.132',
      port: '3306',
      database: 'test',
      user: 'root',
      password: 'root',
      prefix: 't_',
      encoding: 'utf8'
    },
    mongo: {

    }
  }
};