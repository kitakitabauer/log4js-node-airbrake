# log4js-node-airbrake
## log4js Airbrake Reporter

### Installing
Install with npm using the following command

```sh
npm install log4js-node-airbrake
```

### Configuring
Like all log4js appenders, log4js-node-airbrake can be configured via a file or code.  

```javascript
var log4js = require('log4js');

log4js.configure({
  appenders: [
    {
      category: 'basic',
      type: 'log4js-node-airbrake',
      level: 'not-notification-level',
      key: 'your-project-token',
    }
  ]
});

var logger = log4js.getDefaultLogger();
logger.debug('Don't won't be logged');
logger.info('Nor will this');
logger.error('Error String');
logger.error(new Error('Error Obj with a backtrace'));
```

This will report all events from the appender as Errors (regardless of the logleve!)
to your Airbrake application
