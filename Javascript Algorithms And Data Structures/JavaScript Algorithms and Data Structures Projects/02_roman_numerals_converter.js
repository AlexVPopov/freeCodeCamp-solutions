function convertToRoman(num) {
  const romanNumbers = {
    0: ['I', 'V', 'X'],
    1: ['X', 'L', 'C'],
    2: ['C', 'D', 'M'],
    3: ['M']
  }

  const numberConverter = (number, dict) => {
    switch(number) {
      case 1:
      case 2:
      case 3:
        return dict[0].repeat(number)
      case 4:
        return dict[0] + dict[1]
      case 5:
        return dict[1]
      case 6:
      case 7:
      case 8:
        return dict[1] + dict[0].repeat(number - 5)
      case 9:
        return dict[0] + dict[2]
      default:
        return ''
    }
  }

  return num.toString().split('').map((digit, position, digits) => {
    return numberConverter(parseInt(digit), romanNumbers[digits.length - position - 1])
  }).join('')
}

console.log(convertToRoman(400))
