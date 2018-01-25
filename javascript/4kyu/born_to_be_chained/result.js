function chain(fns) {
  function ChainWrapper(x) {
    this._ = x
  }
  
  Object.keys(fns).forEach(function(prop) {
    var fn = fns[prop]
    
    ChainWrapper.prototype[prop] = function() {
      var args = [].slice.call(arguments)
      if (this._ != null) args.unshift(this._)
      
      var x = fn.apply(null, args)
      return new ChainWrapper(x)
    }
  })
  
  ChainWrapper.prototype.execute = function() {
    return this._
  }
  
  return new ChainWrapper()
}
