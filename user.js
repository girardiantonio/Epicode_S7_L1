class User {
  constructor(_firstname, _lastname, _age, _location) {
    this.firstname = _firstname
    this.lastname = _lastname
    this.age = _age
    this.location = _location
  }

  ageComparision(utente) {
    if (this.age > utente.age) {
      console.log(`${this.firstname} è piu vecchio di ${utente.firstname}`)
    } else if (this.age < utente.age) {
      console.log(`${this.firstname} è piu giovane di ${utente.firstname}`)
    } else {
      console.log(`${this.firstname} ha la stessa età di ${utente.firstname}`)
    }
  }
}

const giovanni = new User("Giovanni", "Rossi", "24", "Roma")


const marco = new User("Marco", "Strada", "34", "Milano")
giovanni.ageComparision(marco)

const luca = new User("Marco", "Strada", "19", "Milano")
giovanni.ageComparision(luca)

const michele = new User("Michele", "Lotto", "24", "Napoli")
giovanni.ageComparision(michele)