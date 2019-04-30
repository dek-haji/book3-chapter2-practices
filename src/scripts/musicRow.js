
let Chaten = [];
let jumpStop = [];
let polarRecords = [];




const createRapArtists = (details) => ({
    RapArtists : details
})
jumpStop.push(createRapArtists("Dusta Grimes is a Rap artist and is 21 years old"))
jumpStop.push(createRapArtists("Loyoncé Branis is a Rap artist and is 27 years old"))

const createFunkArtists = (artists) => ({
    FunkArtists: artists
})
jumpStop.push(createFunkArtists("Dre Funkz is a Funk artist and is 25 years old"));
console.log(jumpStop)


const createCountryArtists = (details) => ({
    countryArtists: details
})
Chaten.push(createCountryArtists("Bruce Atikins is a Country artist and is 23 years old"))
Chaten.push(createCountryArtists("Avilee Dallas is a Country artist and is 19 years old"))
console.log(Chaten)

const createBluegrassArtist = (details) => ({
    BlueGrassArtists: details
})
Chaten.push(createBluegrassArtist("Bartholomew Danielson is a Bluegrass artist and is 23 years old"))


const createPopArtists = (popArtists) => ({
    popArtists: popArtists
})
polarRecords.push(createPopArtists("Jensen Brown is a Pop artist and is 20 years old"))
polarRecords.push(createPopArtists("Austin Kinkaid is a Pop artist and is 22 years old"))
console.log(polarRecords)




