function calculatePower(arr) {
  arr = arr.map( e => e*2)
  return arr.reduce( (t,i) => t+i, 0)
}