var arr = ['Thomas', 'Bo', 'John', 'Jan', 'Frederik', 'Lis', 'Anne', 'Bob'];

// Filter Method

Array.prototype.myFilter = function(callback) {
    filteredArray = [];
    this.forEach(function(name) {
        if (callback(name)) {filteredArray.push(name)}
    });

    return filteredArray;
}


var newArr = arr.myFilter(function(name) {
    return name.length < 4;
})
console.log(newArr);

// Map Method

Array.prototype.myMap = function(callback){
    mappedArray = [];
    this.forEach(function(value)
    {
        mappedArray.push(callback(value));
    })

    return mappedArray;
};

newArr = arr.myMap(function(name) {
    return name.toUpperCase();
})

console.log(mappedArray)
