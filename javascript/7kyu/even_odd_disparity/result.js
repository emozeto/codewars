function solve(a){
  let evenNum = 0;
  let oddNum = 0;
  for(let elem of a ) {
    if(!isNaN(elem)) {
      if( elem % 2 === 0 ) {
        evenNum += 1;
      }
      else { 
        oddNum +=1 ;
      }
    }
  }
  return evenNum-oddNum;
};