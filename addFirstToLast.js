function addFirstToLast(strArr) {
  if (strArr.length == 0) return ""
  
  return strArr[0] + strArr[strArr.length - 1]
}