function findUniq(arr) {
  let map = {};
  for(let item of arr ) {
    item in map ? map[item] += 1 : map[item] = 1;
  }
  let result = 0;
  Object.keys(map).forEach(function(key,index) {
      if( map[key] === 1 ) {
        result = +key;
      }
  });
  return result;
}