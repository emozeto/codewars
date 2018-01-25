function mean(town, strng) {
    let data = strng.split('\n').reduce((total, current) => {
        let tmp = current.split(':');
        if( tmp[0] === town ) {
          total = tmp[1];
        }
        return total;
      }, []);
    if ( data && (typeof data == 'string' || data instanceof String)) {
      let numbers =  data.match(/[+-]?\d+(\.\d+)?/g).map(Number);
      if( numbers ) {
        let sum = numbers.reduce( (total, current) => total + current);
        return sum/numbers.length;
      }
    }
    
    return -1;
}

function variance(town, strng) {
    let m = mean(town, strng);
    let data = strng.split('\n').reduce((total, current) => {
        let tmp = current.split(':');
        if( tmp[0] === town ) {
          total = tmp[1];
        }
        return total;
      }, []);
    
    if ( data && (typeof data == 'string' || data instanceof String)) {
      let numbers =  data.match(/[+-]?\d+(\.\d+)?/g).map(Number);
      if( numbers ) {
        let sum = numbers.reduce( (total, current) => {
          return total + Math.pow(current-m, 2);
        }, 0);
        return sum/numbers.length;
      }
    }
    
    return -1;
}