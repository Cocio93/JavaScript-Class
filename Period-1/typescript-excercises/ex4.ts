// A

interface myFunc {
    (a: string, b: string, c: string): Array<string>;
}

// B

let functionB: myFunc = function(a: string, b: string, c: string) {

    let list: Array<string> = [a, b, c];

    return list;
}

console.log(functionB("What", "is", "up"));

// C

let functionC: myFunc = function (a: string, b: string, c: string) {

    var list: Array<string> = [a.toUpperCase(), b.toUpperCase(), c.toUpperCase()];
    return list;
    
}

console.log(functionC("What", "is", "up"));

// D

let functionD = function logger(f1: myFunc){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["A", "B", "C"];
    console.log(f1(a,b,c));
}

functionD(functionB);