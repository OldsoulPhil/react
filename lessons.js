// an expressions is a value, or will eventually evaluate to one. - definition 

//if you can console.log it without throwing an error it is an expression

console.log(undefined); // undefined is an expression

console.log(5); // five is an expression (value)

const array = [1, 2, 3];

// transform the array into its double value
console.log(array.map(n => n * 2)); // the new array is 2 4 6 which is an expression

console.log(2 && 4 && 6); // the 2 && 4 && 6 is an expression (=== 6)

// all of them are expression because they can be logged

//function

function add(a, b) {
  return a + b
}

console.log(add(1, 2)); // the add function with 1 and 2 is an expression

console.log(
  false ? 'Hello' : 'Goodbye' // this is an expression
);

// What is not an expression ********************************

console.log(
  for (let i = 0; i < 100; i++) {
  console.log('Hello');
}
); // ************************* this is not an expression

