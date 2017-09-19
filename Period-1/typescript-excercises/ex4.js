// A
// B
var functionB = function (a, b, c) {
    var list = [a, b, c];
    return list;
};
console.log(functionB("What", "is", "up"));
// C
var functionC = function (a, b, c) {
    var list = [a.toUpperCase(), b.toUpperCase(), c.toUpperCase()];
    return list;
};
console.log(functionC("What", "is", "up"));
// D
var functionD = function logger(f1) {
    //Simulate that we get data from somewhere and uses the provided function
    var _a = ["A", "B", "C"], a = _a[0], b = _a[1], c = _a[2];
    console.log(f1(a, b, c));
};
functionD(functionB);
