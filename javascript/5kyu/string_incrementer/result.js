Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}

function incrementString (strng) {
  let regexp = /\d*$/i;
  let res = regexp.exec(strng);
  if ( !!res[0] ) {
    let str = (+res[0]+1).pad(res[0].length);
    return strng.replace(regexp, str); 
  }
  return strng+'1';
}