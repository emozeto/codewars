var numberToPrice = function(number) {
  if( number && !isNaN(+number) ) {
    let num = number.toFixed(3).toString();
    return num.slice(0, num.indexOf('.') + 3).replace(/(\d)(?=(\d{3})+(?!\d)(?=\.))/g, "$1,");
  }
  return 'NaN';
}