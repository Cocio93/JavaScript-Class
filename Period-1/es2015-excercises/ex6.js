let fName = "Kurt";
let lName = "Wonnegut";
let age = 98

function getPerson(fName, lName, age) {
    return {
        fName,
        lName,
        age
    }
}

let myPerson = getPerson(fName, lName, age);
console.log(myPerson);