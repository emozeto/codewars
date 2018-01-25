function thirt(n) {
   let total = 0;
   let calc = (n) => {
     let numbers = Array.from(n.toString()).map(Number);
     let length = numbers.length;
     let tmpTotal = 0;
     for(let i = 0,length = numbers.length; i < length; i++ ) {
       let tmp = Math.pow(10, i) % 13 * numbers[numbers.length-i-1];
       tmpTotal += tmp;
     }
     return tmpTotal;
   }
   let total2 = calc(n);
   while( total !== total2 ) {
     total = total2; 
     total2 = calc(total2);
   }
   return total;
}