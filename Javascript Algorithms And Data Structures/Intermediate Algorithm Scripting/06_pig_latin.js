//https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin

function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) { return str + 'way' }

  return str.replace(/(^[^aeiou]+)(\w*)/, "$2$1") + 'ay'
}

console.log(translatePigLatin('california'))
