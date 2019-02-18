// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays

function diffArray(arr1, arr2) {
  var newArray = [];

  for (let number of arr1) {
    if (arr2.indexOf(number) < 0) { newArray.push(number) }
  }

  for (let number of arr2) {
    if (arr1.indexOf(number) < 0) { newArray.push(number) }
  }

  return newArray
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
