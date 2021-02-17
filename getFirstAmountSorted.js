function getFirstAmountSorted( arr, num ) {
  let sorted = arr.sort()
  return sorted.slice(0,num)
}