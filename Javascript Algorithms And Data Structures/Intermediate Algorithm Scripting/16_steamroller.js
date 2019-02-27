function steamrollArray(arr) {
  let newArr = [].concat(...arr)
  return newArr.some(element => Array.isArray(element)) ? steamrollArray(newArr) : newArr
}

console.log(steamrollArray([[["a"]], [["b"]]]))
