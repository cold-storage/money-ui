(function() {
  if ((typeof module) !== 'undefined') {
    var moment = require('moment');
  }
  function bla(date) {
    return moment(date).format('MMM D').toUpperCase();
  }
  if ((typeof module) === 'undefined') {
    window.date = bla;
  } else {
    module.exports = bla;
  }
})();
