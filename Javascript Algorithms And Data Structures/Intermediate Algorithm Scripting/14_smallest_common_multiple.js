// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple

function smallestCommons(arr) {
  let [low, high] = arr.sort((first, second) => { return first - second })

  let range = Array.from(Array(high + 1).keys()).slice(low).filter(number => number > 1)

  let primeFactorizations = range.map(number => primeFactorize(number))

  let primeFactors = new Set(primeFactorizations.flat())

  let emptyExponents = [...primeFactors].reduce((accumulator, prime) => {
    accumulator[prime] = 0
    return accumulator
  }, {})

  let exponents = primeFactorizations.map(primeFactorization => {
    return primeFactorization.reduce((accumulator, prime) => {
      accumulator[prime] += 1
      return accumulator
    }, JSON.parse(JSON.stringify(emptyExponents)))
  })

  let result = {}

  for (let prime of primeFactors) {
    result[prime] = 0
    exponents.reduce((acc, exponent) => {
      if (acc[prime] < exponent[prime]) { acc[prime] = exponent[prime] }

      return acc
    }, result)
  }

  let sum = Object.keys(result).reduce((currentSum, key) => {
    currentSum *= Math.pow(parseInt(key), result[key])
    return currentSum
  }, 1)

  return sum
}

function primeFactorize(num) {
  if (num < 2) { return [] }

  if (num === 2) { return [2] }

  let sieve = []
  let primeFactors = []

  for (let i = 2; i <= num; i++) {

    if (!sieve[i]) {
      while (num % i == 0) {
        primeFactors.push(i)
        num /= i
      }

      for (let j = i; j <= num; j += i) {
        sieve[j] = true
      }
    }
  }

  return primeFactors
}

console.log(smallestCommons([23, 18]))
