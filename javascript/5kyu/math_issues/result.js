Math.round = function(number) {
  return (number - (number|0) >= 0.5 ) ? ( number | 0 ) + 1 : number | 0;
};

Math.ceil = function(number) {
  return (number - (number|0) > 0 ) ? ( number | 0 ) + 1 : number | 0;
};

Math.floor = function(number) {
  return number | 0;
};