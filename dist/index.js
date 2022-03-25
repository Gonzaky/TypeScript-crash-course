"use strict";
/// --------- TYPESCRIPT CRASH COURSE -----------///
// --------  basic types --------- //
let id = 5;
let company = 'goncales';
let isPublished = true;
let x = 'hello';
let ids = [1, 2, 3, 4, 5]; // this type is an array that can only contain numbers
let arr = [1, true, 'hello']; // type of array that allows any types
// ------------- Tuple --------------//
let person = [1, 'test1', true]; // the values need to be in the same order
// ----------- Tuple Array ------------- //
let employee;
// an array of tuples we define employee é an Array with a tuple array inside
// an array of tuples
employee = [
    [1, 'goncales'],
    [2, 'brad'],
    [3, 'john']
];
// ---------- Unions ---------//
let pid = 22; // can be a number or string
pid = 'hello';
// ---------- Enum ---------- //
var direction1;
(function (direction1) {
    // If we change Up to Up=1, the other strings will increment to numbers after it automatically
    direction1[direction1["Up"] = 1] = "Up";
    direction1[direction1["down"] = 2] = "down";
    direction1[direction1["left"] = 3] = "left";
    direction1[direction1["right"] = 4] = "right";
})(direction1 || (direction1 = {}));
// console.log(direction1.down) // prints 2
var direction2;
(function (direction2) {
    direction2["Up"] = "up";
    direction2["down"] = "down";
    direction2["left"] = "left";
    direction2["right"] = "right";
})(direction2 || (direction2 = {}));
// console.log(direction2.right) // prints string 'right'
// ---------------  Objects ----------------- //
const user = {
    id: 1,
    name: 'john'
};
// then we use it as a Type
const user2 = {
    id: 1,
    name: 'goncales'
};
// ---------- Type Assertion ----------- //
// is explicitly telling the compiler that we want to treat an entity as a different type
let cid = 1;
// let customerId= <number> cid; it explicitly says that customerId is a type number of cid variable that was <any>
let customerId = cid; // it's the same as <number>cid
// ----------------------- functions ----------------------------- //
function addNum(x, y) {
    // if we don't give types to parameters it's going to default to <any>
    return x + y;
}
console.log(addNum(1, 2)); // if a function just returns a value we need to console.log to see it
function log(message) {
    console.log(message);
}
log('hello'); // prints hello
// then we use it as a Type
const user3 = {
    id: 1,
    name: 'goncales',
    test: 'holas'
};
const add = (x, y) => x + y;
// we cannot change the types here  i.e. "x: string" gives Error because the type in MathFunc is 'number'
//------------------------------ CLASSES!!! --------------------------------------//
// classes can have properties and methods()!
// properties of the object i.e "id:number" | methods are just functions in a Class i.e. like constructor() {}
class Person {
    // A CONSTRUCTOR IS A FUNCTION THAT IS GOING TO RUN THE MOMENT THE CLASS IS CALLED anywhere
    constructor(id, name) {
        //  console.log(id,name) // his would print just  1 'pedro' won't create the object
        this.id = id; // I need to provide values to the properties to create the new object
        this.name = name;
        //  console.log('123') this console log would still print before the object 'brad'
    }
    // we can add as many "methods/which are functions" we want:
    register() {
        return `${this.name} has been registered`;
    }
}
// this 'brad' will "instantiate|represent as"
const pedro = new Person(1, 'pedro'); // this will make a variable calling the class Person which will run the Constructor
// JS will read this variable and call it and console.log(123) right away no questions asked in the 1st example
const john = new Person(2, 'john');
console.log(pedro); // prints object: Person{id: 1, name: 'pedro'}
console.log(john); // prints object: Person{id: 2, name: 'john'}
// john.id = 5 // TS gives error saying the 'id' property is private, but it still 'works' in the JS compiled
// console.log(john.id) // TS also gives error , but vanilla JavaScript doesn't care
console.log(pedro.register()); // here we call the custom method '.register()' we created
class Gamer {
    constructor(id, name, test) {
        this.id = id;
        this.name = name;
        this.test = test;
    }
    login() {
        return `${this.name} has logged in`;
    }
}
const goncales = new Gamer(1, 'goncales', 1);
console.log(goncales);
console.log(goncales.login());
// -------------- Subclasses ------------//
class Healer extends Gamer {
    constructor(id, name, spec, test) {
        super(id, name, test); // in this super we add the properties we already declared in the Parent class
        this.spec = spec; // any new properties we create now we still need to add here like before
    }
}
const andre = new Healer(2, 'Andre', 'restoration', 2);
console.log(andre); // prints Healer {id: 2, name: 'Andre', test: 2, spec: 'restoration'}
// -------------------- Generics -------------------- //
// function getArray(items: any[]): any[]{ return ...} this would accept arrays of any time and return array of any type
// to make a generic type, so we can define later on we can add 'placeholders'
// in this case it's a function with type 'placeholder' that accepts args type 'placeholder'
// and returns array with type 'placeholder'
function getArray(items) {
    return new Array().concat(items); // this will make a new array and ".concat"(adicionar) the argument of items
    // new Array() it's just a method of Javascript to create a new array
}
const numArray = getArray([1, 2, 3, 4, 5]); // here we give type <number> to the function<PlaceHolder>
const strArray = getArray(['pedro', 'rebeca', 'john']);
numArray.push(6); // if type is any[] it will add strings to our numArray
strArray.push('holas');
console.log(numArray);
console.log(strArray);
