const cache = func => {
    const cachedResults = {}; 
    return (...params) => {
      if( JSON.stringify(params) in cachedResults ) {
        return cachedResults[JSON.stringify(params)];
      } else {
        cachedResults[JSON.stringify(params)] = func(...params);
        return cachedResults[JSON.stringify(params)];
      }
    }
}