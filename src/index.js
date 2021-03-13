module.exports = function check(str, bracketsConfig) {
  let opening = '', closing = '';
  let finalArray = str.split('');
  for(let i = 0; i < bracketsConfig.length; i++) {
    opening = bracketsConfig[i][0];
    closing = bracketsConfig[i][1];
  
  
    for(let j = 0; j < finalArray.length; j++) {
      if(finalArray[j] == opening && finalArray[ j + 1 ] == closing) {
        finalArray.splice(j, 2);
        j = -1;
        i = -1
      }
    }
  }
  if(finalArray.length == 0)
    return true;
  return false
}
