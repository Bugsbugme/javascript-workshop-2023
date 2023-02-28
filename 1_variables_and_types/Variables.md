# [Variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations)

A variable is a word that represents a piece of data. It consists of an identifier and a value.

You can use the `var` keyword to declare a variable and use `=` to assign a value to it.

> ```js
> var x = "";
> ```
>
> In this case `x` is the identifier, while `""` is the value which is being assigned with `=`.

You can (mostly) name a variable whatever you like. For readability however, variable identifiers should be meaningful and relevant to the data they are representing.

> ```js
> var userName = "Bob42";
> var userEmail = "bob42@email.com";
> var userAge = 42;
> ```

There are some things you can't do when naming variables.

> Variable names can contain numbers but not begin with one.
>
> ```js
> > var 1x = ""
> var 1x = ""
>     ^
>
> Uncaught SyntaxError: Invalid or unexpected token
> > var x1 = "a string"
> undefined
> > x1
> 'a string'
> ```

> You can not use spaces.
>
> ```js
> > var my string = ""
> var my string = ""
>        ^^^^^^
>
> Uncaught SyntaxError: Unexpected identifier 'string'
> ```

> You can use underscores (`_`) to separate words (known as [snake case](https://en.wikipedia.org/wiki/Snake_case)), but not dashes (`-`) as the dash is used as the subtraction operator.
>
> ```js
> > var my-string = ""
> var my-string = ""
>       ^
>
> Uncaught SyntaxError: Unexpected token '-'
> > var my_string = "a string"
> undefined
> > my_string
> 'a string'
> ```
>
> Note: A more conventional way to use multiple words in a variable name is to use [camelCase](https://en.wikipedia.org/wiki/Camel_case), where the first word is in lower case and each following word begins in upper case.
> For example:
>
> > ```js
> > > var myNewString = ""
> > ```

> Some words are [reserved](https://www.w3schools.com/js/js_reserved.asp) and can not, on their own, be used as variable names.
>
> ```js
> > var new = ""
> var new = ""
>     ^^^
>
> Uncaught SyntaxError: Unexpected token 'new'
> > var newString = "a string"
> undefined
> > newString
> 'a string'
> ```

Because JavaScript is case sensitive, it is possible to use the same word to declare multiple variables that won't interfere each other.

> ```js
> > var cat = "Mr. Floof"
> undefined
> > var Cat = "Sir Chonk"
> undefined
> var CAT = "Loafy"
> undefined
> > cat
> 'Mr. Floof'
> > Cat
> 'Sir Chonk'
> > CAT
> 'Loafy'
> ```
