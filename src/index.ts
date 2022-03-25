
/// --------- TYPESCRIPT CRASH COURSE -----------///

// --------  basic types --------- //
let id: number = 5 ;
let company: string ='goncales';
let isPublished: boolean =true;
let x:any = 'hello';

let ids: number[] = [1,2,3,4,5] // this type is an array that can only contain numbers
let arr: any[] = [1,true,'hello'] // type of array that allows any types

// ------------- Tuple --------------//
let person: [number,string,boolean] = [ 1,'test1',true] // the values need to be in the same order

// ----------- Tuple Array ------------- //
let employee: [number,string][];
// an array of tuples we define employee é an Array with a tuple array inside

// an array of tuples
employee = [
    [1,'goncales'],
    [2,'brad'],
    [3,'john']
]

// ---------- Unions ---------//
let pid: string | number = 22; // can be a number or string
pid = 'hello';

// ---------- Enum ---------- //
enum direction1{ // it provides const strings that equal to numeric values
    // If we change Up to Up=1, the other strings will increment to numbers after it automatically
    Up =1,
    down,
    left,
    right
}
// console.log(direction1.down) // prints 2

enum direction2{ // we can also provide strings as values BUT the values will NOT increment like the numbers
    Up ='up',
    down='down',
    left='left',
    right='right',
}
// console.log(direction2.right) // prints string 'right'

// ---------------  Objects ----------------- //
const user:{ // this is the messy way
    id:number,
    name:string
} ={
    id:1,
    name:'john'
}
// this is a better way BUT the best way would be with "interfaces"
type User = { // we create a Type of the object
    id:number,
    name:string
}
// then we use it as a Type
const user2 : User = {
    id:1,
    name:'goncales'
}

// ---------- Type Assertion ----------- //
// is explicitly telling the compiler that we want to treat an entity as a different type

let cid : any = 1 ;
// let customerId= <number> cid; it explicitly says that customerId is a type number of cid variable that was <any>
let customerId = cid as number // it's the same as <number>cid

// ----------------------- functions ----------------------------- //

function addNum(x:number, y:number):number{ // function return can also have types | ": void" is for no return
    // if we don't give types to parameters it's going to default to <any>
    return x+y;
}
console.log(addNum(1,2)) // if a function just returns a value we need to console.log to see it

function log(message:string|number): void{
    console.log(message)
}
log('hello') // prints hello
// just calling the function which has no return value  i.e. "undefined"
// it simply runs the function that has a console.log

// ---------------- INTERFACES -------------------- //

interface UserInterface{ // this is the used way to create custom types ONLY WORKS WITH OBJECTS | Functions | class
    id:number,
    name:string,
    age?: number, // if u add '?' it means the property is optional, so it won't give error if it's missing later
    readonly test: string, // this means it's a read only property, so you cannot mutate it after
}
// then we use it as a Type
const user3 : UserInterface = {
    id:1,
    name:'goncales',
    test:'holas'
}
// interface doesntWork = number | string ; THIS DOESN'T work with primitives nor unions

// user3.test = 'adios'; // gives ERROR because it's a 'read only' we cannot mutate it after we give the original value

//-------- INTERFACES for Functions----------//

interface MathFunc {
    (x:number,y:number):number
}

const add:MathFunc = (x, y)=> x+y;
// we cannot change the types here  i.e. "x: string" gives Error because the type in MathFunc is 'number'

//------------------------------ CLASSES!!! --------------------------------------//

// classes can have properties and methods()!
// properties of the object i.e "id:number" | methods are just functions in a Class i.e. like constructor() {}
class Person {
    // in TypeScript there are 3 types of access/data modifiers : public , private , protected
    // 1- by default properties are 'public'
    // 2- private means you should only access the property within the class itself
    // 3- protected means you should only access the property within this class and any class that are extended
    // from this class i.e.'sub classes'


    private id:number // if I don't pass this.id = id to the constructor  it WON'T create the object with the property
    name:string

    // A CONSTRUCTOR IS A FUNCTION THAT IS GOING TO RUN THE MOMENT THE CLASS IS CALLED anywhere
    constructor(id:number, name:string) {
        //  console.log(id,name) // his would print just  1 'pedro' won't create the object

        this.id = id // I need to provide values to the properties to create the new object
        this.name = name
       //  console.log('123') this console log would still print before the object 'brad'
    }
    // we can add as many "methods/which are functions" we want:
    register(){
        return`${this.name} has been registered`
    }

    // classes are used to create objects, so we can make multiple objects of "Persons"
}
// this 'brad' will "instantiate|represent as"
const pedro = new Person(1,'pedro') // this will make a variable calling the class Person which will run the Constructor
// JS will read this variable and call it and console.log(123) right away no questions asked in the 1st example

const john = new Person(2,'john')
console.log(pedro) // prints object: Person{id: 1, name: 'pedro'}
console.log(john) // prints object: Person{id: 2, name: 'john'}

// john.id = 5 // TS gives error saying the 'id' property is private, but it still 'works' in the JS compiled
// console.log(john.id) // TS also gives error , but vanilla JavaScript doesn't care

console.log(pedro.register()) // here we call the custom method '.register()' we created
// prints 'pedro has been registered'


// ------ IMPLEMENT INTERFACE TO A CLASS --------- //

interface GamerInterface {
    id:number,
    name:string,
    login():string // function with type of string
}

class Gamer implements GamerInterface{
    // if we don't give ALL the properties with the same name as GamerInterface TS will give an error
    // saying we are not following the Type we implemented from GamerInterFace
    // BUT we can add more properties from the ones it had originally and TS won't give error

id:number;
name;
test:number;

login(){
    return `${this.name} has logged in`
}

constructor(id:number,name:string,test:number) {
    this.id = id
    this.name =name
    this.test=test
}
}

const goncales = new Gamer(1,'goncales',1)
console.log(goncales)
console.log(goncales.login())


// -------------- Subclasses ------------//
class Healer extends Gamer {
    spec:string

    constructor(id:number,name:string,spec:string,test:number) {
        super(id,name,test); // in this super we add the properties we already declared in the Parent class
        this.spec = spec // any new properties we create now we still need to add here like before
    }

}
const andre = new Healer(2,'Andre','restoration',2)
console.log(andre) // prints Healer {id: 2, name: 'Andre', test: 2, spec: 'restoration'}

// -------------------- Generics -------------------- //

// function getArray(items: any[]): any[]{ return ...} this would accept arrays of any time and return array of any type

// to make a generic type, so we can define later on we can add 'placeholders'
// in this case it's a function with type 'placeholder' that accepts args type 'placeholder'
// and returns array with type 'placeholder'
function getArray<PlaceHolder>(items: PlaceHolder[]): PlaceHolder[]{
    return new Array().concat(items) // this will make a new array and ".concat"(adicionar) the argument of items
// new Array() it's just a method of Javascript to create a new array
}

const numArray = getArray<number>([1,2,3,4,5]) // here we give type <number> to the function<PlaceHolder>
const strArray = getArray<string>(['pedro','rebeca','john'])

numArray.push(6) // if type is any[] it will add strings to our numArray
strArray.push('holas')
console.log(numArray)
console.log(strArray)