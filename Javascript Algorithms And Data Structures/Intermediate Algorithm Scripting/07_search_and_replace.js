// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/search-and-replace

function myReplace(str, before, after) {
  if (before.match(/^[A-Z]/)) { after = after.charAt(0).toUpperCase() + after.slice(1) }

  return str.replace(before, after)
}

console.log(myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'))
