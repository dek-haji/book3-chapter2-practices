// Lightning Exercise 2: Write a factory function that creates an object that represents a pet. 
// The function should accept two arguments.
let BowWowKennels = [];

const petsObj = (name, breed) => ({
    "petName": name,
    "petBreed": breed
})
BowWowKennels.push(petsObj("husky", "german Sheverd"))
BowWowKennels.push(petsObj("name less", "Boxer"))
BowWowKennels.push(petsObj("snoop", "Greyhound"))
console.log(BowWowKennels)