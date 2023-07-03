const petNameInput = document.getElementById("petName-field")
const ownerNameInput = document.getElementById("OwnerName-field")
const speciesInput = document.getElementById("species-field")
const breedInput = document.getElementById("breed-field")

const petForm = []

class Pets {
  constructor(_petname, _ownername, _species, _breed) {
    this.petname = _petname
    this.ownername = _ownername
    this.species = _species
    this.breed = _breed
  }
}

const renderList = function () {
  const petList = document.getElementById("contact-list")

  petList.innerHTML = ""
  petForm.forEach((contact) => {
    const newLi = document.createElement("li")
    newLi.innerText = `${contact.petname} ${contact.ownername} ${contact.species} ${contact.breed}`
    petList.appendChild(newLi)
  })
}

const formReference = document.querySelector(".submit-button")

formReference.addEventListener("submit", function (e) {
  e.preventDefault()

  const newPet = new Pets(
    petNameInput.value,
    ownerNameInput.value,
    speciesInput.value,
    breedInput.value
  )

  console.log("CONTATTO CREATO", newPet)

  petForm.push(newPet)

  petNameInput.value = ""
  ownerNameInput.value = ""
  speciesInput.value = ""
  breedInput.value = ""

  renderList()
})
