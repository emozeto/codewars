function parse(s) {
  return s.split('->')[0].trim() === 'null' ? null : new Node(+s.split('->')[0].trim(), parse(s.slice(s.indexOf('>')+1).trim()));
}