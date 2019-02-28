function rot13(str) { // LBH QVQ VG!
  let firstPosition = 'A'.charCodeAt(0)
  let lastPosition = 'Z'.charCodeAt(0)

  return str.replace(/[A-Z]/g, (char) => {
    let currentPosition = char.charCodeAt(0)
    let charCodePosition

    if (currentPosition - firstPosition >= 13) {
      charCodePosition = currentPosition - 13
    } else {
      charCodePosition = lastPosition - (13 - (currentPosition - firstPosition + 1))
    }

    return String.fromCharCode(charCodePosition)
  })
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"))
console.log(rot13("LBH QVQ VG!"))
