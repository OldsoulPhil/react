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

// React code
// <App>
//    <Data /> component
//    <ListOfItems /> component
// </App>

//component tree is App on top and arrows pointing to data box and
// list of items box.

// the UI to build which has an overall app box. First is app box
// then data box inside filled with object of keys, lastItem: item3
// and itemCount: 3. Then the list of items box filled with an
// array of item 1, item 2, item 3.

// 1. start with array of items and in data box you want to get values
//    a. lastItem: item3
//    b. itemCount: 3
// 2. Get the data by passing items into the component refer to above React code
// 3. the list of items needs an array of items. Data is also need array of items.
// 4. The items array lives in a constraint, "one way data binding" is where the constraint lives.
// 5. One way data binding says that if we have some data that lives on app.
// 6. The only way to get the react data to list of items is by
// passing it from parent to list of items or (child).
// 7. cannot not take data from list of items (child) and pass it up to parent (app).
// 8. The only place the array of items can live is on the App Box portion.
// 9. Data must be on the parent.
// 10.