var person = {
    name: 'Anders',
    age: 24,
    getInfoString: function() {
        return 'Name: ' + this.name + ' Age: ' + this.age;
    }
}

console.log(person.getInfoString());

function test_this() {
    return this;
}
var i_wonder_what_this_is = test_this();
console.log(i_wonder_what_this_is);

var number = {
    value: 10,
    squared: function() {
        return this.value*this.value;
    }
}

console.log(number.squared());
