// A

function NumbersES5(numbs) {
    this.nums = numbs;
    this.fives = [];
    this.nums.forEach(function (v) {
        if (v % 5 === 0) {
            this.fives.push(v);
        }
    }, this);
}
var numbersES5 = new NumbersES5([1, 3, 5, 10, 14, 20, 33, 50]);
console.log(numbersES5.fives);

function NumbersES6(numbs) {
    this.nums = numbs;
    this.fives = [];
    this.nums
        .filter((v) => v % 5 === 0)
        .forEach((v) => this.fives.push(v));
}

var numbersES6 = new NumbersES6([1, 3, 5, 10, 14, 20, 33, 50]);
console.log(numbersES6.fives);

// B

var counterES5 = {
    count: 0,
    inc: () => { this.count++ }  // Doesnt work, since "this" in arrow functions refers to the state right before the arrow function is assigned
};

var func = counterES5.inc; //Store "reference" to inc
func();
console.log(counterES5.count); //Still zero
counterES5.inc();
console.log(counterES5.count); //Now one
