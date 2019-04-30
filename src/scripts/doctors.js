// Lightning Exercise 1: Write a factory function that creates an object that represents a doctor.
//  The function should accept three arguments.

const doctorsObj = (name, speciality, address) => ({
    "doctorsName": name,
    "docSpeciality": speciality,
    "docsAddress":address
})
console.log(doctorsObj("dek", "nurse", "1047 glastonbury road"))