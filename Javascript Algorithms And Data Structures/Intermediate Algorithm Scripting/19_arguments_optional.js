function addTogether() {
  if (arguments.length == 1) {
    let a = arguments[0]
    if (typeof a !== 'number') return undefined
    return function() {
      if (typeof arguments[0] !== 'number') return undefined
      return a + arguments[0]
    }
  } else {
    console.log(typeof arguments[0])
    if (typeof arguments[0] !== 'number' || typeof arguments[1] !== 'number') return undefined
    return arguments[0] + arguments[1]
  }
}

console.log(addTogether(2)(3) )
