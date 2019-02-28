function palindrome(str) {
  let newStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase()
  return newStr == newStr.split('').reverse().join('');
}

palindrome("A man, a plan, a canal. Panama");
