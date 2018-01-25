function divisors(integer) {
  let divisor = 2;
  let arr = [];
  while (divisor < integer) {
    if ( integer % divisor == 0 ) {
      if ( arr.indexOf(divisor) === -1 ) {
        arr.push(divisor);
      }
    }
    divisor++;
  }  
  if( arr.length === 0 && integer <= divisor ) {
    return `${integer} is prime`;
  }
  return arr;
};