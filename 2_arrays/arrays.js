// Arrays are used to group multiple pieces of data into one variable.
// You can create an array like this:
var myArray1 = new Array("some", "data");
//or like this
var myArray2 = ["some", "data"];

// You can hold anything in an array.
var myArray3 = ["Bob", 42, 4.2, false, undefined, null];
console.log(myArray3);

// You can also have arrays within arrays.
var fruits = ["apple", "orange", ["banana", "grape", "mango"]];
console.log(fruits);

// There are many different methods for manipulating an array.
// https://www.w3schools.com/js/js_array_methods.asp

// To see how may things are in an array:
console.log(fruits.length);

// The data in an array is indexed and numbered starting at 0.
// To find something in an array, you need to know its index number.
console.log(fruits[0]);
// So to read "orange" out of the "fruits" array, you would use:
console.log(fruits[1]);
// [2] would give the sub array and all the data inside of it.
console.log(fruits[2]);
// To read "banana" in the sub array:
console.log(fruits[2][0]);

// You can use splice to remove things, and return a new array containing
// all the values that were removed.
console.log(fruits.splice(1, 2)); //This will remove "orange" and the sub array and print them to the console.

// You can use push to add things and return the new length of the array.
console.log(fruits.push("apricot"));

// Strings themselves can also be treated like arrays.
// The individual characters (including spaces) are indexed like separate pieces of data.
var myString = "This is a string";
console.log(myString[6]); //This should print "s" to the console.
