// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes

function sumPrimes(num) {
  if (num <= 1) { return num }

  return primesUpTo(num).reduce((sum, prime) => sum + prime)
}

function primesUpTo(num) {
  if (num < 2) { return -1 }

  let primes = Array.from(Array(num + 1).keys())

  for (let i = 2; i <= Math.sqrt(num); i++) {
    for (let j = i + i; j <= num; j += i) {
      primes[j] = false
    }
  }

  return primes.filter(prime => prime).slice(1)
}

console.log(sumPrimes(977))
