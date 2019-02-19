const gcdFinder = require('./gcd').gcd

function totalUpDownBounces(a, b) {
  return b / gcdFinder(a, b) - 1
}

function totalRightLeftBounces(a, b) {
  return a / gcdFinder(a, b) - 1
}

function totalBounces(a, b) {
  return (a + b) / gcdFinder(a, b) - 2
}

module.exports = {
  totalUpDownBounces: totalUpDownBounces,
  totalRightLeftBounces: totalRightLeftBounces,
  totalBounces: totalBounces
}
