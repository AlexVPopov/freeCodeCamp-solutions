// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str.split(/[\s_-]|(?=[A-Z])/).map(word => word.toLowerCase()).join('-')
}

console.log(spinalCase('This Is Spinal Tap'))
