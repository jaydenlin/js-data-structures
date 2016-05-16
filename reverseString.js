function reverseString(str){
  if(str.length===1){
    return str;
  }
  return reverseString(str.substring(1))+str.charAt(0);

};

console.log(reverseString("ABC"));
