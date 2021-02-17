function scan(arr) {
  let contrabandCount = 0

  arr.forEach( e=> { if(e=="contraband") contrabandCount++ })

  return contrabandCount
}