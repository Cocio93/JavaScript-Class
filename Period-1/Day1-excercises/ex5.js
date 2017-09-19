var all= ["Lars", "Peter", "Jan", "Bo"];

// A

console.log(all.join(','));
console.log(all.join(' '));
console.log(all.join('#'));

// B

var numbers = [2, 3, 67, 33];

var sum = numbers.reduce(function(sum, number) {
    return sum + number;
})

console.log('Sum: ' + sum);

// C

var members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22},
   ]

var avgAge = members.reduce(function(accumulator, member,index,arr ){
    var temp = accumulator + member.age;
        if(index==arr.length-1){
            return temp / arr.length;
        }
        return temp;
}, 0)

console.log('Average Age: ' + avgAge);