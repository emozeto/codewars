function chooseBestSum(t, k, ls) {
    if ( k > ls.length ) {
      return null;
    }
    
    function* subsets(array, offset = 0) {
      while (offset < array.length) {
        let first = array[offset++];
        for (let subset of subsets(array, offset)) {
          subset.push(first);
          yield subset;
        }
      }
      yield [];
    }
    
    let max = 0;
    for (let subset of subsets(ls)) {
      if (subset.length === k ) {
          let tmp = subset.reduce((sum, x) => sum + x);
          if ( tmp <= t && tmp > max ) {
            max = tmp;
          }
      }
    }
    
    return max === 0 ? null : max;
}