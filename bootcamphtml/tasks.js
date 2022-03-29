// function camelize(str) {
//   return str
//     .split("-") //split background-color into array ['background','color']
//     .map((arr1, index) =>
//       //index==0 true the aray as it is then array is null it convert first letter to capitalize
//       index == 0 ? arr1 : arr1[0].toUpperCase() + arr1.slice(1)
//     )
//     .join(""); //join ['background','color'] into 'backgroundColor
// }
// console.log(camelize("background-color"));
/********************************************************************* */

// let arrObj = [
//   { name: "Shantanu", age: 27 },
//   { name: "Vignesh", age: 24 },
//   { name: "Priya", age: 24 },
//   { name: "Goutham", age: 26 },
// ]; // ['Shantanu','Vignesh','Priya', 'Goutham']//
// let arr = arrObj.map((e) => {
//   return e.name;
// });
// console.log(arr);
/************************ */
//task5//
// function printNumber(i) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }
// for (var i = 1; i <= 5; i++)
// printNumber(i);

// let i = 0;
// setTimeout(() => {
//   alert(i);
// }, 100);
// for (let j = 0; j < 100000000; j++) {
//   i++;
// }
//
// let i = 0;

// setTimeout(() => alert(i), 1000); // ?100000000  999999999

// // assume that the time to execute this function is >100ms
// for (let j = 0; j < 100; j++) {
//   i++
// }
//Array asending order
let arr = [5, 2, 1, -10, 8];
arr.sort();
//arr.reverse(); desending order
console.log(arr);
