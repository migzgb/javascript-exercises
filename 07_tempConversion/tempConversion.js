const ftoc = function(far) {
  let n = 5 / 9 * (far-32)
  let round = Math.round(n * 10) / 10;
  return round
};

const ctof = function(cel) {
  let n = 9 / 5 * cel + 32;
  let round = Math.round(n * 10) / 10;
  return round
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
