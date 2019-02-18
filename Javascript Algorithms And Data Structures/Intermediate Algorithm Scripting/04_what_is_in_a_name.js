// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou

function whatIsInAName(collection, source) {
  return collection.filter(element => Object.keys(source).every(key => source[key] === element[key]))
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }))
