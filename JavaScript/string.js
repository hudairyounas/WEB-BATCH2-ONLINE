// let text = "Hello JavaScript, welcome Futureplix JavaScript course";
// let result = text.match(/Javascript/g);
// // * regex = /JavaScript/g
// // // let result = text.match("JavaScript");
// console.log(result);

// let text = "Hello JavaScript, welcome Futureplix JavaScript JavaScript course";
// let result = text.matchAll("JavaScript");
// //? "JavaScript" => /JavaScript/g
// // * regex = /JavaScript/g
// // // let result = text.match("JavaScript");
// for (let item of result) {
//     console.log(item["input"])
// }
// [
//   'JavaScript',
//?   index: 37,
//   input: 'Hello JavaScript, welcome Futureplix JavaScript course',
//   groups: undefined
// ]

// //? includes(): Returns true if the string contains the specified value, and false otherwise.
// let text = "Hello JavaScript, welcome to Futureplix JavaScript course";
// // let includeResult = text.includes("Hello");
// let includeResult = text.includes("j");
// console.log(includeResult);

//? startsWith(): The startsWith() method returns true if a string begins with a specified value.Otherwise it returns false:
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.startsWith("Helcome");
// let result = text.startsWith("JavaScript", 6);
// console.log(result);

//? endsWith(): The endsWith() method returns true if a string ends with a specified value. Otherwise it returns false:

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// // let result = text.endsWith("welcome");
// let result = text.startsWith("h");
// console.log(result)

//* Extracting String Parts:
//! Extracting String Parts:

//? String.prototype.substr() it is deprecated  ❌

//? a: slice() extracts a part of a string and returns the extracted part in a new string.
// syntax
//? slice(start, end);

// let text = "Hello JavaScript, welcome to our world best JavaScript course";

// // let result = text.slice(6);
// let result = text.slice(6, 16);
// console.log(result);

//! Replacing String Content:
//? replace() : The replace method is used to replace a specified value with another value.
// const str = "Hello, World!";
// //? Syntax: replace(searchFor, replaceWith)
// const newStr = str.replace("World", "JavaScript");
// console.log(newStr); // Outputs: Hello, JavaScript!

//? replaceAll() : The replaceAll() method returns a new string with all matches of a pattern replaced by a replacement.
// const str = "Hello, World World!";
// // Syntax: replaceAll(searchFor, replaceWith)
// const newStr = str.replace("World", "JavaScript");
// console.log(newStr); // Outputs: Hello, JavaScript!