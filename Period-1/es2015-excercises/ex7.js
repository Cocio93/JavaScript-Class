// A
let fName = "Kurt", lName = "Wonnegut";

[lName, fName] = [fName, lName];
console.log(`First: ${fName}, Last: ${lName}`);

// B

function getPerson() {
    return {
        firstName: "Kurt",
        lastName: "Wonnegut",
        gender: "Male",
        email: "kurt@wonnegut.dk",
        phone: "12345",
    }
}

var { lastName, phone } = getPerson();
console.log(`lastName: ${lastName}, phone: ${phone}`);