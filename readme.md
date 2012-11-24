# JavaScript like

---

## Contacts application



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

## CoffeeScript

### A rubyish-pythonesque-javascriptish language that compiles to javascript. Basically it makes your code less verbose.

Functions can be created rubyishly: 
> square = (x) -> x * x

Great features for making functions with arbitrary-length argument list:
> awardMedals = (first, second, others...) ->
    //do stuff with the arguments!

Gotta love awesome pythonic list comprehensions
> eat food for food in ['toast', 'cheese', 'wine']

> countdown = (num for num in [10..1])

Cool array slicing features
> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
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

    <!DOCTYPE html>
    <html>
      <head><title> TypeScript Greeter </title></head>
      <body>
        <script src='greeter.js'></script>
      </body>
    </html>

---

## TypeScript Example Continued...

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
