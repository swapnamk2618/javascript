//(spread operator)
//task1
//write the function showname which Accept firstname lastname as argument &
//title also as an argument but person can have many title
// const displayName = (fname, lname, ...args) => {
//   let name = fname + "" + lname + "";
//   for (let title of args) {
//     name += title + "";
//   }
//   return name;
// };
// console.log(displayName("miss", "swapna", "kochrekar"));
/****************************************************************** */
//task 2
//mergeArrays([1,2,3], [3,4,5]) => [1,2,3,4,5]
// let arr1 = [1, 2, 3];
// let arr2 = [3, 4, 5];
// const getUnique = (arr1, arr2) => {
//   //merge two array element using spread operator
//   let arr3 = [...arr1, ...arr2];
//   //display arr 3 element in console
//   console.log(arr3);
//   let sameArray = [...new Set(arr3)]; // array converted set used to remove the duplicate array element
//   //display element
//   console.log(sameArray);
// };
// getUnique(arr1, arr2);//calling function add argument
/*************************************************************************** */
const myFunction = () => {
  alert("hello");
};
