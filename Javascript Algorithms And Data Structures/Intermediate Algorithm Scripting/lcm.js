const gcd = require('./gcd').gcd

function lcm(a, b) {
  [a, b] = [a, b].sort((x, y) => { return y - x })

  return a * b / gcd(a, b)
}

module.exports = { lcm: lcm }
