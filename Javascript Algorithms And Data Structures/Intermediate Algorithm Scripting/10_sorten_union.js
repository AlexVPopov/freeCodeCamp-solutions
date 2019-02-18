// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sorted-union

function uniteUnique(...arrays) {
  let result = []

  for (let array of arrays) {
    for (let number of array) {
      if (!result.includes(number)) { result.push(number) }
    }
  }

  return result
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]))
