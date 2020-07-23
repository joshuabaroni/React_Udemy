// exports and imports (modules)
const person = {
    name: 'Max'
}

export default person
/* ^ imports default and ONLY export
of the file. The name in the receiving
file is up to you */

/*
Sample import of this file:
<script>
    // default export
    import person from './person.js'
    //            -or-
    import prs from './person.js'

    // named export
    import { baseData } from './utility.js'
    import { clean } from './utility.js'

    import { baseData as bd } from './utility.js'
    import * as bundled from './utility.js'
</script>
 */

export const clean = () => { /*...*/ }
export const baseData = 10;

// var, let, and const
var thisVar = 10; // original, can be changed, does not go out of scope
var thisVar = function () {
    console.log("printNear")
}

let thatVar = 20; // can be changed, goes out of scope
const otherVar = () => { // cannot be changed, does not go out of scope
    console.log("printFar")
}

// arrow functions
let i = ((num) => num*2)(19);
console.log("i value:", i)

// classes
class Person {
    constructor(name) {
        this.name = name
    }
    call = () => {
        console.log(this);
    }
}

// usage
const myPerson = new Person()
myPerson.call()
console.log(myPerson.name)

// Inheritance
class Master extends Person {
    constructor(name) {
        super(name),
        call2 = () => console.log(yeet);
    }
}

// properties
class sampleObj {
    // ES6
    constructor() {
        this.myProperty = 'value'
    }
    // ES7
    myProperty = 'value'
}

// methods
class sampleObj2 {
    // ES6
    myMethod() {
        console.log('ES6')
    }
    // ES7
    myMethod = () => console.log('ES7')
}

// spread operator
const newArray = [...oldArray, 1, 2] // pulls all vals in arr
const newObject = { ...oldObject, newProp: 5 } // pulls all props and methods in obj

// rest operator
function sortArgs(...args) { // merges a list of params into an array
    return args.sort()
}

// destructuring
// * easily extract array elements or obj properties and store them in vars
// arr destructuring
[a, b] = ['Hello', 'Max']
console.log(a, b)

let arr = [a, ,c] = ['Hello', 'Max', 'imillion']
console.log(arr)

// obj destructuring
let obj = {name} = {name: 'Max', age: 28}
console.log(obj.name) // Max
console.log(obj.age)  // undef

// primitive types vs reference types
const num = 1; // this is a primitive
const num2 = number; // this is a reference to num

const person = { // primitive object
    name: 'Max'
}

const secondPerson = person; // pointer to person
console.log(secondPerson)

// NOTE: changing secondPerson will change person since it is a pointer
// therefore, we should always copy immutably with the '...' operator

// array functions
const numbers = [1, 2, 3]
const doubleNumArray = numbers.map((num) => {
    return num * 2
})

console.log(numbers)
console.log(doubleNumArray)