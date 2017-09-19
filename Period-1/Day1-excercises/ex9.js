// 1
var person = {
    firstname: "Jonathan",
    lastname: "Henriksen",
    age: 24,
    sex: "Male"
}

iterate = function(object) {
    Object.keys(object).forEach(function(key, value) {
        console.log(key, object[key])
    })
}

iterate(person);

console.log("hasOwnProperty(sex): " + person.hasOwnProperty("sex"));
delete person.sex;
console.log("hasOwnProperty(sex): " + person.hasOwnProperty("sex"));

iterate(person);

// 2

makePerson = function(firstn, lastn, ag) {
    return {
        firstname: firstn,
        lastname: lastn,
        age: ag,
        getDetails: function() {
            return "Firstname: " + this.firstname + ', Lastname: ' + this.lastname + ', Age: ' + this.age
        }
    }
}

var newPerson = makePerson("John", "Henriksen", 12);
console.log(newPerson.getDetails())