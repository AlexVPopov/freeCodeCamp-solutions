function gcd(arr) {
  let [x, y] = arr.sort((a, b) => { return b - a })
  return y == 0 ? x : gcd([y, x % y])
}

function lcm(arr) {
  return arr[0] * arr[1] / gcd(arr)
}

function smallestCommons(arr) {
  arr = arr.sort((a, b) => { return b - a })

  let range = []

  for (let i = arr[0]; i >= arr[1]; i--) {
    range.push(i)
  }

  return range.reduce((currentLcm, element) => { return lcm([currentLcm, element]) })
}

console.log(smallestCommons([23, 18]))

