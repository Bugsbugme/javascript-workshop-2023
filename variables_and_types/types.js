// Some basic data types you can use in JavaScript.
var string = "";
var integer = 42;
var float = 4.2;
var bool = true;
var undefinedType = undefined;
var nullType = null;

// To print something to the console, use the console.log() method - https://developer.mozilla.org/en-US/docs/Web/API/console/log
console.log(string);

// To see the data type a variable is holding, use the typeof() method - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
console.log(typeof string);

// JavaScript is "loosely typed" meaning you don't need to specify
// what type of data a variable is holding.
var num1 = 42; // This is an integer
var num2 = "42"; // This is not an integer
var num3 = num1 + num2; // And yet, JavaScript will still allow this kind of operation.
// The num3 variable will not give the value of 84 however,
// and the two variables will simply be concatinated into a new string of "4242".
console.log(num3);
// This is becasue the + sign is used both as the addition operator and a way to concatinate strings.
