// FUNCTION CURRYING -> can be done using 2 methods : 1st is by using bind method, 2nd is by using closures.

// let multiply = function(x, y) {
//     console.log(x * y)
// };

let multiply = function (x) {
    return function (y) {
        console.log(x * y);
    }
}

// Here, x = 2 & y = 6, this is being referred to the multiply function
let multiplyByTwo = multiply.bind(2);
multiplyByTwo(6);

// let multiplyByThree = multiply.bind(this, 3);
// multiplyByThree(5);


