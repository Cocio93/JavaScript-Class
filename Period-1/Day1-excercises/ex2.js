var arr = ['Thomas', 'Bo', 'John', 'Jan', 'Frederik', 'Lis', 'Anne', 'Bob'];

// Filter Method

function myFilter(array, callback) {
    array.forEach(function(element, index) {
        callback(element, array, index)
    }, this);

    return array;
}

function shortNames(name, array, index) {
    if(name.length > 3){
        array.splice(index, 1);
    }
}

console.log(myFilter(arr, shortNames));

// Map Method

function myMap(array, callback) {
    array.forEach(function(element, index) {
        array[index] = callback(element)
    }, this);

    return array;
}

function makeUpperCase(name) {
    return name.toUpperCase();
}

console.log(myMap(arr, makeUpperCase));