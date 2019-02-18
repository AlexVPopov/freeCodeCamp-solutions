// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy

function destroyer(arr, ...targets) {
  return arr.filter(element => !targets.includes(element))
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
