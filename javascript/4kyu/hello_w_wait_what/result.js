var helloWorld = function () {
  const zero = function() { return arguments.callee.name };
  const one = function() { return arguments.callee.name };
  const two = function() { return arguments.callee.name };
  const three = function() { return arguments.callee.name };
  const four = function() { return arguments.callee.name };
  const five = function() { return arguments.callee.name };
  const six = function() { return arguments.callee.name };
  const seven = function() { return arguments.callee.name };
  const eight = function() { return arguments.callee.name };
  const nine = function() { return arguments.callee.name };
  const map = [zero, one, two, three, four, five, six, seven, eight, nine];
  const chars = [
    String.fromCharCode(+(map.indexOf(seven).toString() + map.indexOf(two).toString())),
    String.fromCharCode(+(map.indexOf(one).toString() + map.indexOf(zero).toString() + map.indexOf(one).toString())),
    String.fromCharCode(+(map.indexOf(one).toString() + map.indexOf(zero).toString() + map.indexOf(eight).toString())),
    String.fromCharCode(+(map.indexOf(one).toString() + map.indexOf(zero).toString() + map.indexOf(eight).toString())),
    String.fromCharCode(+(map.indexOf(one).toString() + map.indexOf(one).toString() + map.indexOf(one).toString())),
    String.fromCharCode(+(map.indexOf(three).toString() + map.indexOf(two).toString())),
    String.fromCharCode(+(map.indexOf(eight).toString() + map.indexOf(seven).toString())),
    String.fromCharCode(+(map.indexOf(one).toString() + map.indexOf(one).toString() + map.indexOf(one).toString())),
    String.fromCharCode(+(map.indexOf(one).toString() + map.indexOf(one).toString() + map.indexOf(four).toString())),
    String.fromCharCode(+(map.indexOf(one).toString() + map.indexOf(zero).toString() + map.indexOf(eight).toString())),
    String.fromCharCode(+(map.indexOf(one).toString() + map.indexOf(zero).toString() + map.indexOf(zero).toString())),
    String.fromCharCode(+(map.indexOf(three).toString() + map.indexOf(three).toString())),
  ];
  return chars.join(String());
}