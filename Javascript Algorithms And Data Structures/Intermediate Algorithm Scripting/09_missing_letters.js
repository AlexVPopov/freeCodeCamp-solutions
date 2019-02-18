// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/missing-letters

function fearNotLetter(str) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

  let offset = ALPHABET.indexOf(str.charAt(0))

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ALPHABET[i + offset]) { return ALPHABET[i + offset] }
  }
}

console.log(fearNotLetter("abce"))
