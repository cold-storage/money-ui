var Handlebars = require('handlebars');
module.exports = function(s) {
  if (!s) {
    return 'NOTHING_TO_CAP';
  }
  return new Handlebars.SafeString('<pre>'+s.toUpperCase()+'</pre>');
};
