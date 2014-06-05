var Handlebars = require('handlebars');
module.exports = function(s) {
  return new Handlebars.SafeString('<pre>'+s.toUpperCase()+'</pre>');
};
