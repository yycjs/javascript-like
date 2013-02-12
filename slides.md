# JavaScript Like

---

## Contacts application

![Contacts application](images/contacts.png)

---

## Google Dart

![Dart Logo](images/dart_logo.png)

---

## [Google Dart](http://www.dartlang.org)

> Dart brings structure to web app engineering with a new language, libraries, and tools

- Class based
- Object oriented
- Typed (optional)
- Compiles to JavaScript

To get started:

- [Download the SDK](http://www.dartlang.org/downloads.html) (comes with Chromium browser)
- [Check out the language tour](http://www.dartlang.org/docs/dart-up-and-running/ch02.html)
- [Language spec](http://www.dartlang.org/docs/spec/latest/dart-language-specification.html)

---

## [Google Dart](http://www.dartlang.org) Reviewed

* Object oriented so pretty familiar
* Fast!
* Need the Dart IDE (WTF).

  * Can now use Webstorm (which is awesome)
* Data types and inheritance were confusing and not expected.
* Two different HTML elements (HTML, Html)... WTF!


---

## CoffeeScript Reviewed

* Good documentation
* Lightweight
* Easy integration with third party libraries and RequireJS
* A lot of examples out now
* If you don't come from Ruby it takes a bit to get used to the syntax
* Indentation can really fuck up the context
* Improper indentation can create bugs that will make you want to kill yourself
* Good out of the box compiler. Nice additional functions
* You always need a compile step

---

## TypeScript Reviewed

* A lot of documentation
* A lot of decent sized examples on the TypeScript website
* Lots of flexibility but IMO it's too much. Too many different ways to do things so without best practices code can turn into a cluster-fuck real quick.
* Integration with third party libraries are fucking terrible
* How to include other modules:
`/// <reference path="./contact.ts"/>` WTF is that!
* Declaring types is kinda crazy
* Feels like a mix between C# and JavaScript so a little familiar
* Inheritance is kind of nice, actually
* Optional parameters are weird `firstName?: string`
* What is with the `.d.ts` files? They are essentially TypeScript header files for JavaScript modules. Who is hell is gonna write and maintain those?

---

## Overall Review

* No real best practices (that we found). So you have to figure it all out yourself.
* Source maps are pretty decent now so debugging is a little less painful.

---

## CoffeeScript

![CoffeeScript Logo](images/cofeescript_logo.jpg)

---

## CoffeeScript

### A rubyish-pythonesque-javascriptish language that compiles to javascript. Basically it makes your code less verbose.

Functions can be created rubyishly:

    !javascript
    square = (x) -> x * x

Great features for making functions with arbitrary-length argument list:

    !javascript
    awardMedals = (first, second, others...) ->
      //do stuff with the arguments!

Gotta love awesome pythonic list comprehensions

    !javascript
    eat food for food in ['toast', 'cheese', 'wine']

Countdown:

    !javascript
    countdown = (num for num in [10..1])

---

## CoffeeScript

Cool array slicing features

    !javascript
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    start   = numbers[0..2]

It also has classes, inheritance and super

And more... (which is my way of saying that I'm running out of time and need some more hands on this)

---

## Microsoft TypeScript

![TypeScript Logo](images/typescript_logo.jpg)

---

## What is TypeScript?

#### From the TypeScript Site:

* TypeScript is a language for application-scale JavaScript development.
* TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
* Any browser. Any host. Any OS. Open Source.

---

## TypeScript Example

    !html
    <!DOCTYPE html>
    <html>
      <head><title> TypeScript Greeter </title></head>
      <body>
        <script src='greeter.js'></script>
      </body>
    </html>

---

## TypeScript Example Continued...

    !javascript
    class Greeter {
       constructor(public greeting: string) { }
       greet() {
           return "<h1>" + this.greeting + "</h1>";
       }
    };
    var greeter = new Greeter("Hello, world!");
    var str = greeter.greet();
    document.body.innerHTML = str;

---

## TypeScript: Up and Running

* `npm install -g typescript`
* Write your code with a `.ts` file extension
* Compile your typescript `tsc your_file.ts`
* Include your compiled JS files like usual `<script src="path/to/your_file.js"></script>`

#### If you like Visual Studio

Go to [the TypeScript tutorial](http://www.typescriptlang.org/Tutorial/)

---
