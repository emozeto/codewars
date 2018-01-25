function presses(phrase) {
 let keyboard = ['1','ABC2','DEF3','GHI4','JKL5','MNO6','PQRS7','TUV8','WXYZ9','*',' 0','#'];
 return phrase.toUpperCase().split('').reduce( (total, letter) => {
    total += keyboard.reduce( (total, key) => {
      if( key.includes(letter) ) {
        total += key.indexOf(letter) + 1;
      }
      return total;
    }, 0 );
    return total;
 }, 0);
}