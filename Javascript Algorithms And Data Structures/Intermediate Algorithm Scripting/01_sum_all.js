// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range

function sumAll(arr) {
  let [low, high] = arr.sort((first, second) => { return first - second })

  let sum = 0

  for (let i = low; i <= high; i++) { sum += i }

  return sum
}

console.log(sumAll([1, 4]))
