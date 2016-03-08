'use strict'

/**
 * Airbrake Appender. Sends logging events to Airbrake using node-airbrake
 *
 * @param config {object}
 * {
 *   level: 'notification-level', // default ERROR
 *   key: 'project-token',
 * }
 */
function appender(config) {
  var client = require('airbrake').createClient(config.key, config.mode || 'product');

  return function(log) {
    if (log.level.isLessThan(config.level || 'ERROR')) {
      return;
    }

    try {
      client.notify({
        type: config.level || 'ERROR',
        message: log.data[0],
        stack: log.data[0]
      }, function(err, url) {
        err && console.error(err, url);
      });
    } catch (e) {
      console.error(e);
    }
  }
}

function configure(config) {
  return appender(config);
}

exports.name = 'log4js-node-airbrake';
exports.appender = appender;
exports.configure = configure;
