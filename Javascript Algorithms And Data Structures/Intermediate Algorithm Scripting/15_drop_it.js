function dropElements(arr, func) {
  let index = 0

  while (!func(arr[index])) {
    index++
  }

  return arr.slice(index)
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3; }))

