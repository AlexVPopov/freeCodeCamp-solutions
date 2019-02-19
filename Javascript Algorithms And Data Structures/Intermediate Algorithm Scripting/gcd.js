let [first, second] = process.argv.slice(2, 4)


function gcd(x, y) {
  [x, y] = [x, y].sort((a, b) => parseInt(b) - parseInt(a))

  while (Math.floor(x / y) < x / y) { [x, y] = [y, x - Math.floor(x/y) * y] }

  return y
}


console.log(gcd(first, second))
