function digital_root(n) {
  var arr = (""+n).split('');
  var sum = 0;
  for(var i=0,len = arr.length;i<len;i++) {
      sum += parseInt(arr[i], 10);
  }
  if ( sum > 9 )
    sum = digital_root(sum);
  return sum;
}