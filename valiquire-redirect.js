'use strict';
var electronModules = ['app', 'browser-window', 'crash-reporter', 'remote', 'shell', 'clipboard', 'screen'];

module.exports = function redirect(request) {
  // Tell valiquire to ignore these modules
  if(~electronModules.indexOf(request)) return null;

  // all others we don't redirect
  return request;
};
