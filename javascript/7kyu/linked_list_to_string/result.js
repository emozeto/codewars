function stringify(list) {
  let str = '';
  let get_str = (list) => {
    if(!list) {
      str += 'null'; 
      return;
    }
    str += list.data + ' -> ';
    return get_str(list.next);
  }
  get_str(list);
  return str;
}