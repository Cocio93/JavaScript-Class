// A

function f(x, y, ...rest) {
    return `Sum: ${x + y}\n${rest.map((arg, index) => `rest value ${index + 1} is a: ${arg.constructor.name}`).join('\n')}`
};

console.log(f(5, 2, true, 2, "hello World", [1, 2, 3], new Date(), {}));

// B

var rest = [true, 2, "hello World", [1, 2, 3], new Date(), {}];
var restParams = [...rest];
console.log(f(5, 2, ...restParams));

// C

var chars = [...f(5, 2, ...restParams)];
console.log(chars);