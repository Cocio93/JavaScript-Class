var arr = ['Thomas', 'Bo', 'John', 'Jan', 'Frederik', 'Lis', 'Anne', 'Bob'];

console.log(arr);

var arr2 = arr.filter(function(name) {
    return name.length < 4;
}
);

console.log(arr2);

var arr3 = arr2.map(function(name) {
    return name.toUpperCase();
}
);

console.log(arr3)