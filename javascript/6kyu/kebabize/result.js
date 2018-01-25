function kebabize(str) {
  return str.replace(/\d+/g, '').split(/(?=[A-Z])/).map( (val) => val.toLowerCase()).join('-');
}