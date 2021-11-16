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

/* 
var window = {
    addEventListener: function (eventName, eventFunction){
        ...itt tortenik mindenfele dolog az eventname-mel meg a funkcioval
    }
}
*/
