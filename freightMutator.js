function mutate(strArr) {
  let res = []
  strArr.forEach( e => res.push(e.toUpperCase()) )

  return res
}