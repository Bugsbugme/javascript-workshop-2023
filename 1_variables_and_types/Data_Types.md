# [Data Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#data_types)

It's a common requirement in programming languages, to specify the the data type when declaring variables. JavaScript though, is "dynamically typed" meaning you don't need to do this and types are automatically converted when they need to be. - [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#data_type_conversion)

These are some of the [primitive data types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) you can work with in JavaScript.

> - [string](https://developer.mozilla.org/en-US/docs/Glossary/String)
> - [number](https://developer.mozilla.org/en-US/docs/Glossary/Number)
> - [boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)
> - [undefined](https://developer.mozilla.org/en-US/docs/Glossary/Undefined)
> - [null](https://developer.mozilla.org/en-US/docs/Glossary/Null)

To see the data type a variable is holding, use the `typeof()` method - [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

> ```js
> > var x = ""
> undefined
> > typeof(x)
> 'string'
> ```

JavaScript's "dynamically typed" nature means it's possible to add a `number` with a `string`.

In this case, a `number` will be converted to a `string`. Meanwhile, the `+` operator not only adds `numbers` together, but it concatenates `strings`.

> ```js
> > var string1 = "This"
> undefined
> > var string2 = " is a concatenated string"
> undefined
> > string1 + string2
> 'This is a concatenated string'
> ```

So the result is a concatenation of the number and the string.

> ```js
> > var num1 = 42
> undefined
> > var num2 = "42"
> undefined
> > num1 + num2
> '4242'
> ```
