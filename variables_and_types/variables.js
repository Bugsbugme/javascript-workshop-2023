// A variable is a word that represents a peice of data.
// You can use the var keyword to assign (=) a value to a variable.
var x = "";

// You can use (mostly) whatever words you like to declare variables,
// but for readability, the variables should have meaningful names
// and be relevant to the data they are representing.
var candy = "Chocolate";
var chocolate = "yummy";

// There are some things you can't do when naming variables.
// The name can not begin with a number.
var 1string = "This won't work";
// You shouldn't use special characters either.
var $name = "Technically this will work, but may cause problems later";
// Spaces also do not work in variable names.
var my string = "This variable is called my but JavaScript does not know what to do with the next word";
// Use underscorse instead of dashes as the dash is used as the
// "minus" operator.
var my-string = "Not fine";
var my_string = "Fine";
// For multiple words, it is more conventional to use camelcase though.
var myString = "Better";
// There are some words that are reserved by the langauge - https://www.w3schools.com/js/js_reserved.asp
// These words shouldn't be used to name variables.
var new = "Don't do this";

// Variable names are case sensitive.
var cat = "This is one variable"
var CAT = "This is another variable and will not interfere the other cat variable"
var Cat = "This will also not interfere the other variables"

// JavaScript will also allow you to declare a variable without the var keyword.
userName = "Bob"