/*
window.addEventListener('load', function (){
    console.log('the page has loaded')
});

var myFirstString = 'ez "egy" string';
var mySecondString = "ez is 'egy' string";

var myThirdString = `
ez egy tobbsoros string
es ez nekunk nagyon jo
huhuhuhu
jee
backticket hasznalunk hozza
je je je
`;

var myFirstNumber = 0;
var mySecondNumber = 23;
var myThirdNumber = 34653465;

var myFirstBoolean = true;
var mySecondBoolean = false;

var myFirstArray = ['1984', 'Lord of the Rings', 'A Mester és Margarita', 'Galaxis útikalauz stopposoknak', 'Vita Brevis'];
var mySecondArray = ['1984', 'Lord of the Rings', 'Snowden', 'Dune'];

var myFirstObject = {
    title: 'Lord of the Rings',
    release: 1954,
    author: 'John Ronald Reuel Tolkien',
    translations: ['hu', 'de', 'fr']
}

console.log(myFirstArray[0]);
console.log(myFirstObject.title);
console.log(myFirstObject['title']);

var a = 1;
var b = 2;
var c = a+b;

console.log(c);

function add(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber)
}

add(1,2);
add(14325,2356);

var subtraction = function (a,b) {
    console.log(a - b)
}

subtraction(32145, 2354);

function ifElseCheck (text){
    if (text === 'hello') {
        console.log('text was the string "hello')
    } else if (text === 'hello') {
        console.log('text was the string "hello" again')
    } else {
        console.log('text was something other than "hello"')
    }
}

function compare(a,b) {
    console.log('==', a==b)
    console.log('===', a===b)

    var c = a-b;
    console.log(typeof c);
}

compare("1984", 1984);

var myFirstFunctionVariable = function (){
    console.log('this is a function stored in a variable')
}

myFirstFunctionVariable();


//immediately invoked function expression
(function (){
    console.log('?')
}());

var anotherVar = myFirstFunctionVariable(); //ha a függvény neve mögött a zárójel ki van téve, akkor legyen bárol., a függvény lefut
// anotherVar();
console.log(typeof anotherVar); //undefined
console.log(anotherVar); //undefined

var anotherVar2 = myFirstFunctionVariable;
anotherVar2();

console.log(typeof anotherVar2);

//function as an argument
function theLastFunction(obj1, obj2){
    console.log('obj1 erteke: ', obj1);
    console.log('boj1 tipusa: ', typeof obj1);
    console.log('obj2 erteke: ', obj2);
    console.log('obj2 tipusa: ', typeof obj2);
    console.log(obj2());
}

theLastFunction('hello', function (){
    return 'I am calling theLastFunction'
});


var window = {
    addEventListener: function (eventName, eventFunction){
        ...itt tortenik mindenfele dolog az eventname-mel meg a funkcioval
    }
}
*/

console.log(myFirstGlobalVar);
var myFirstGlobalVar = 0;
console.log(myFirstGlobalVar);

//LET AND CONST CANNOT BE ACCESSED BEFORE INITIALIZATION

// console.log(mySecondGlobalVar);
let mySecondGlobalVar = 1;
console.log(mySecondGlobalVar);

// console.log(myThirdGlobalVar);
const myThirdGlobalVar = 2;
console.log(myThirdGlobalVar);

console.log(myFirstGlobalVar, mySecondGlobalVar, myThirdGlobalVar);

(function (){
    console.log(myFirstGlobalVar, mySecondGlobalVar, myThirdGlobalVar);

    var myFirstFunctionVar = 3;
    let mySecondFunctionVar = 4;
    const myThirdFunctionVar = 5;
    console.log(myFirstFunctionVar, mySecondFunctionVar, myThirdFunctionVar);

    (function (){
        console.log(myFirstGlobalVar, mySecondGlobalVar, myThirdGlobalVar);
        console.log(myFirstFunctionVar, mySecondFunctionVar, myThirdFunctionVar);
        (function (){
            console.log(myFirstGlobalVar, mySecondGlobalVar, myThirdGlobalVar);
            console.log(myFirstFunctionVar, mySecondFunctionVar, myThirdFunctionVar);
            var a = 6;
            console.log(a);
        }())
    }())
}())
// console.log(myFirstFunctionVar, mySecondFunctionVar, myThirdFunctionVar);

function f1(){
    console.log(a);
    var a = undefined;
    console.log(a);
    a = 7;
    console.log(a);
    // these two lines are executed under the hood any time I set a var
    //var is always declared as undefined at the top of its scope
}
f1();

function f2(){
    console.log(a);
    var a;
    console.log(a);
    a = 8;
    console.log(a);
}
f2();

function f3(){
    // console.log(a);
    //let can be created without a value
    let a;
    console.log(a);
    a = 8;
    console.log(a);
}
f3();

function f4(){
    // console.log(a);
    //const is very sensitive, needs a value on initialization, cannot be changed
    const a = 9;
    console.log(a);
    // a = 8;
    console.log(a);
}
f4();

function f5(){
    let b;
    console.log(b);
    console.log(typeof b);
}
f5();

function f6(){
    //block scope
    d = 12;
    console.log(d);
    if (true) {
        (function(){
            var d = 11;
            console.log(d);
        }())
    }
    console.log(d);
}
f6();

function f7(){
    if (true) {
        let e = 13;
        console.log(e);
    }
    // console.log(e);
    //let cannot be accessed from outside of the scope
}
f7();

function f8(){
    const ls = ['a', 'b', 'c', 'd', 'e', 'f', true];

    for (let i = 0; i < ls.length; i++) {
        const item = ls[i];
        console.log(item);
    }
    //console.log(i);
    //let doesn't exist outside of the for loop

    for (const item of ls) {
        console.log(item);
    }

    for (const key in ls) {
        const item = ls[key];
        console.log(item);
        console.log(typeof key);
    }
    console.log(f9(ls));
}
f8();

function f9(arrayFromParam){
    console.log(arrayFromParam);

    let abc = '';
    for (const item of arrayFromParam) {
        if (item !== true){
            abc += item;
        }
    }
    // console.log(abc);
    return abc;
}

// const f10 = (text)=>{
//     return `<div>${text}</div>`
// }
const f10 = text => `<div>${text}</div>`;
console.log(f10('welcome'));

window.addEventListener('load', function(){
    const f9Result = f9(['hello', 'bye']);
    document.getElementById('root').insertAdjacentHTML('afterbegin', f9Result);
    document.getElementById('root').insertAdjacentHTML('afterbegin', f10('fiszfasz, biszbasz'));
});