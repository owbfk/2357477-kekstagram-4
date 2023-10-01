function fitStr(str, limit){
  if (str.length<=limit){
    return true;
  }
  return false;
}

function palindrome(str){
  let trs = str;
  for (let i = 0; i<str.length; i++){
    trs[str.length-i-1] = str[i];
  }
  if (trs===str){
    return true;
  }
  return false;
}

