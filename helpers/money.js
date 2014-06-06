module.exports = function(cents) {
  return (cents / 100).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};
