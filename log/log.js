module.exports.file = function (type,log="Empty") {
    const logFile = require('log-to-file');

    switch(type) {
        case "info":
            logFile(log, 'log/files/info.log');
          break;
        case "notice":
            logFile(log, 'log/files/notice.log');
          break;
          case "debug":
            logFile(log, 'log/files/debug.log');
          break;
          case "warning":
            logFile(log, 'log/files/warning.log');
          break;
          case "error":
            logFile(log, 'log/files/error.log');
          break;
        default:
            logFile(log, 'log/files/default.log');
      } 
}
