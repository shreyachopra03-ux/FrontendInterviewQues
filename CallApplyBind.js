//  THIS FE INTERVIEW SERIES IS COMPILED BY AKSHAY SAINI.

let name1 = {
    firstname: "Shreya",
    lastname: "Chopra",
};

let printFullName = function(hometown, state) {
        console.log(this.firstname + " " + this.lastname + " from " + hometown);
}

// Any no. of arguments can be passed here, just do comma-separation
printFullName.call(name1, "Dehradun", "Uttarakhand");

let name2 = {
    firstname: "Sachin",
    lastname: "Tendulkar"
}

// function borrowing 
// we can use call method for function borrowing, to borrow function from one obj to be used on some another object.
// call method
printFullName.call(name2, "Mumbai", "Maharashtra");

// apply method -> in this the 2nd arg is given in the form of an array list, whereas in call method, several arguments can be given but comma separated
printFullName.apply(name2, ["Mumbai", "Maharashtra"]);

// bind method
let printName = printFullName.bind(name2, "Mumbai", "Maharashtra");
// console.log(printName);
printName();

// REVISION for interview

// Call method -> call() is used to call a function immediately and set the value of this. Arguments are passed one by one & are passed as comma-separated.
// Apply method -> apply() works like call(). The only difference is that arguments are passed inside an array.
// Bind method -> bind() does not call the function immediately. It returns a new function with this attached to it, which we can call later. 

// this refers to the object that is executing or invoking the function.

// bind method na ek copy bnaata hai of the original method.