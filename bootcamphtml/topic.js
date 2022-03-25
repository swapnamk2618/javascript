// //You can use the push() method to add items to an array.//
// /*var sandwiches = ["swap", "honav", "hello"];
// sandwiches.push("hi", "bye");

// // returns ['turkey', 'tuna', 'blt', 'chicken', 'pb&j']
// console.log(sandwiches);*/
// //Array.prototype.push.apply() to merge two or more arrays together. It merges all subsequent arrays into the first.//

// var sandwiches1 = ["turkey", "tuna", "blt"];
// var sandwiches2 = ["chicken", "pb&j"];
// Array.prototype.push.apply(sandwiches1, sandwiches2);

// // returns ['turkey', 'tuna', 'blt', 'chicken', 'pb&j']
// console.log(sandwiches1);

// // returns ['chicken', 'pb&j']
// console.log(sandwiches2);
// /*********************************************************************************************** */
// // The Array.pop() method removes the last item from an array and returns it. The array is modified.
// let wizards = ["Gandalf", "Radagast", "Merlin"];
// let last = wizards.pop();

// // logs "Merlin"
// console.log(last);

// // logs ["Gandalf", "Radagast"]
// console.log(wizards);
// /**************************************************************************************************** */
// //The Array.shift() method removes the first item from an array and returns it. The array is modified.
// let wizards = ["Gandalf", "Radagast", "Merlin"];
// let first = wizards.shift();

// // logs "Gandalf"
// console.log(first);

// // logs ["Radagast", "Merlin"]
// console.log(wizards);
// /**************************************************************************************************** */
// //The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// let arr = [1, 2];

// arr.unshift(0); // result of the call is 3, which is the new array length
// // arr is [0, 1, 2]

// arr.unshift(-2, -1); // the new array length is 5
// // arr is [-2, -1, 0, 1, 2]

// arr.unshift([-4, -3]); // the new array length is 6
// // arr is [[-4, -3], -2, -1, 0, 1, 2]

// arr.unshift([-7, -6], [-5]); // the new array length is 8
// // arr is [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2 ]
// /******************************************************************************************* */
// //The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// let fruits = ["apple", "banana", "grapes", "mango", "orange"];

// /**
//  * Filter array items based on search criteria (query)
//  */
// function filterItems(arr, query) {
//   return arr.filter(function (el) {
//     return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
//   });
// }

// console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
// console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'oran
// /************************************************************************************************ */
