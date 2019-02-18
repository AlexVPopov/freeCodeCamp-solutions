// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing

function pairElement(str) {
  return str.split('').map(char => [char, {'A': 'T', 'C': 'G', 'G': 'C', 'T':'A'}[char]])
}

console.log(pairElement("GCG"))
