function wave(str){
  return str.split("").reduce( (result, letter, index, array) => {
    if(letter !== ' ' && letter.match(/[a-z]/i)) {
      let tmp = [...array];
      tmp[index] = letter.toUpperCase();
      result.push(tmp.join(""));
    }
    return result;
  }, []);
}