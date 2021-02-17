function calculateMass(strArr) {
  return strArr.reduce( (total, item) => total + item.length, 0)
}