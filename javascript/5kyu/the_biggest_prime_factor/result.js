function bigPrimefacDiv(n) {
    let number = Math.abs(n);
    let prime_num = -1;
    let result;
    let divisor = 2;
    let highest_div = -1;
    
    if( n !== Math.floor(n) ) {
      return "The number has a decimal part.";
    }
    
    while ( divisor < number ) 
    {
      if ( number % divisor === 0 ) {
        number = number/divisor;
        if(number > highest_div )
          highest_div = number;
      } else {
        divisor++;
      }
    }
    if(divisor === number ) {
        prime_num = number;
    }
    if( highest_div > 0 )
      return [divisor, highest_div];
    
    return [];
}