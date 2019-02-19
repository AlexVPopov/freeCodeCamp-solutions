function gcd(x, y) {
  return y == 0 ? x : gcd(y, x - (Math.floor(x/y)) * y)
}

module.exports = { gcd: gcd }
