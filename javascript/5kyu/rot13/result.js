function rot13(message){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let msg = message.split("");
  let result = msg.map((letter) => {
    let index = alphabet.indexOf(letter.toLowerCase());
    if( index < 0 ) 
      return letter;
    index = (index+13) % 26;
    if(letter === letter.toUpperCase()) {
      return alphabet[index].toUpperCase();
    } 
    return alphabet[index];
  });
  return result.join("");
}