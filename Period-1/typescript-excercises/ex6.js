// A
function printType(arg) {
    console.log(typeof arg);
    return arg;
}
var test = printType("Hello");
// B
function printTypes(argOne, argTwo, argThree) {
    var arrArg = [typeof argOne, typeof argTwo, typeof argThree];
    return arrArg;
}
var newTest = printTypes("Testing", 23, new Date(23, 12, 1999));
console.log(newTest);
// C
function reverseArr(arg) {
    var arrayOfT = []; // Create empty array of type T.
    arrayOfT = arg.reverse();
    return arrayOfT;
}
console.log(reverseArr(["a", "b", "c"]));
console.log(reverseArr([1, 2, 3]));
console.log(reverseArr([true, true, false]));
// D
var DataHolder = /** @class */ (function () {
    function DataHolder(arg) {
        this.arg = arg;
    }
    DataHolder.prototype.getValue = function () {
        return this.arg;
    };
    DataHolder.prototype.setValue = function (value) {
        this.arg = value;
        return this.arg;
    };
    return DataHolder;
}());
var d = new DataHolder("Hello");
console.log(d.getValue());
d.setValue("World");
console.log(d.getValue());
var d2 = new DataHolder(123);
console.log(d2.getValue());
d2.setValue(500);
console.log(d2.getValue());
function printOwner(ownedObj) {
    console.log(ownedObj.owner);
}
var theOwnerer = {
    owner: "Jeremy",
    computers: 1337
};
printOwner(theOwnerer);
