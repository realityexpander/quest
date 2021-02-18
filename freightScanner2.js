function scan(strArr) {
  let res = []

  strArr.forEach( (e, i) => { if (e=="contraband") res.push(i) } )

  return res
}