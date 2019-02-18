// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities/

function convertHTML(str) {
  // &colon;&rpar;
  const SAFE_SYMBOLS = {'&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&apos;', '"': '&quot;'}

  return str.split('').map(char => Object.keys(SAFE_SYMBOLS).includes(char) ? SAFE_SYMBOLS[char] : char ).join('')
}

console.log(convertHTML("Dolce & Gabbana"))
