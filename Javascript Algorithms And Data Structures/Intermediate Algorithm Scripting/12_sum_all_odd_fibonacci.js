// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers

function sumFibs1(num) {
  let [firstFib, secondFib, sum] = [0, 1, 0]

  while (secondFib <= num) {
    if (secondFib % 2 !== 0 ) { sum += secondFib }

    [firstFib, secondFib] = [secondFib, firstFib + secondFib]
  }

  return sum
}

function sumFibs2(num) {
  if (num <= 1) { return 1 }

  return fibsUpTo(num).reduce((sum,fib) => { return fib % 2 !== 0 ? sum + fib : sum })
}

function fibsUpTo(num) {
  if (num == 0) { return 0 }

  let fibs = [1, 1]

  if (num == 1) { return fibs }

  while (fibs[fibs.length - 1] + fibs[fibs.length - 2] <= num) {
    let nextFib = fibs[fibs.length - 2] + fibs[fibs.length - 1]

    fibs.push(nextFib)
  }

  return fibs
}

console.log(sumFibs1(1000))
console.log(sumFibs2(1000))
