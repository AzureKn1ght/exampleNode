//JavaScript is weakly typed
var x = 12;
x = 3.14;
x = "Phil";

//Printing to the developer console
console.log("My Message:");
console.log(x);
console.log(`The value of X is ${x}`);

//Conditional Statements
let age = 21;
if (age > 20) {
  console.log("You can vote!");
} else {
  console.log("Not of voting age.");
}

//Plain Old Functions
function print_sum(a, b) {
  console.log(`${a} + ${b} = ${a + b}`);
}
print_sum(2, 3);

function add(a, b) {
  return a + b;
}
console.log("5 + 3 = " + add(5, 3));

//Anonymous Functions (can be assigned to variables)
var f = function (a, b) {
  console.log(`${a} + ${b} = ${a + b}`);
};
f(1, 1);

//Arrow Functions (new way to write JS functions)
f = (a, b) => {
  console.log(`${a} + ${b} = ${a + b}`);
};
f(2, 2);

//Callback functions
function print_multiply(a, b) {
  console.log(`${a} x ${b} = ${a * b}`);
}
function operate(a, b, operation) {
  //final behavior depends on the callback function passed
  operation(a, b);
}
//callback function passed as a parameter
operate(1, 2, print_sum);
operate(1, 2, print_multiply);
//or you can define the callback function inline!
operate(1, 2, (a, b) => {
  console.log(`${a} / ${b} = ${a / b}`);
});
