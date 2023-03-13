# [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

Arrays are used to group multiple pieces of data into one variable.

> You can create an `array` like this:
>
> ```js
> var myArray = new Array("some", "data");
> ```
>
> or like this:
>
> ```js
> var myArray = ["some", "data"];
> ```

> You can hold anything in an `array`.
>
> ```js
> > var myArray = ["Bob", 42, 4.2, false, undefined, null];
> undefined
> > myArray;
> [ 'Bob', 42, 4.2, false, undefined, null ]
> ```
>
> Even other arrays.
>
> ```js
> > var fruits = ["apple", "orange", ["banana", "grape", "mango"]];
> undefined
> > fruits;
> [ 'apple', 'orange', [ 'banana', 'grape', 'mango' ] ]
> ```

The data in an `array` is indexed and numbered starting at 0. So to access a particular item in an `array`, you need to know its index number.

> To access "orange" in the "fruits" `array`, you would use:
>
> ```js
> > fruits[1];
> 'orange'
> ```
>
> To access the sub array:
>
> ```js
> > fruits[2];
> [ 'banana', 'grape', 'mango' ]
> ```
>
> To access a value inside the sub array:
>
> ```js
> > fruits[2][0];
> 'banana'
> ```

There are many different [methods](https://www.w3schools.com/js/js_array_methods.asp) for manipulating an array.

> To see how many things are in an `array`:
>
> ```js
> > fruits.length;
> 3
> ```
>
> You can use `splice` to remove things, and return a new `array` containing all the values that were removed.
>
> ```js
> > fruits.splice(1, 2);
> [ 'orange', [ 'banana', 'grape', 'mango' ] ]
> ```
>
> You can use `push` to add things, and return the new `length` of the `array`.
>
> ```js
> > fruits.push("apricot");
> 2
> > fruits;
> [ 'apple', 'apricot' ]
> ```

Strings themselves can also be treated like arrays.
The individual characters (including spaces) are indexed like separate pieces of data.

> ```js
> > var myString = "This is a string";
> undefined
> > myString[6];
> 's'
> ```
