class Person {
  constructor(firstAndLast) {
    let names = firstAndLast.split(' ')
    this._firstName = names[0]
    this._lastName = names[1]
  }

  getFullName() {
    return this._firstName + ' ' + this._lastName
  }

  getFirstName() {
    return this._firstName
  }

  getLastName() {
    return this._lastName
  }

  setFirstName(newName) {
    this._firstName = newName
  }

  setLastName(newName) {
    this._lastName = newName
  }

  setFullName(newName) {
    [this._firstName, this._lastName] = newName.split(' ')
  }
}


var bob = new Person('Bob Ross')
console.log(bob.getFullName())
console.log(bob.getFirstName())
console.log(bob.getLastName())
bob.setFullName('Alex Popov')
console.log(bob.getFullName())
