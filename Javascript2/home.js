//variables

//var age = prompt("what is your age");
//document.getElementById('someText').innerHTML = age;//

var num1= 10

num1++; //Increment by 1
console.log(num1);


//Increment/decrement by any number you want
num1 += 10;
console.log(num1);

/* Functions
1. Create a function
2. Call the function
*/
function fun() {
    
}

//Call
fun();

/*Lets create a function that takes in a name
and says hello followd by your name

For example
Name: "Alex"
return: "Hello alex"
*/

function greeting(yourName) {
    
    var result = "Hello" + ' ' + yourName; // String Concatenation
    
    console.log(result);
}
//var name = prompt("What is your name?");
//greeting(name);

//How do arguments work in a fuction?
//How do we add two numbers together in na fucntion?

/*function sumNumbers (num1, num2) {
    var result = num1 + num2;
    console.log(result);
}
sumNumbers(10, 10);*/

/* While loops

var num  = 0;

while (num < 100) {
    num += 1;
    console.log(num);
}*/

// FOr loop
for (let num = 0; num <= 100; num++) {
    console.log(num);
}

// Data types
let yourAge = 29;
let yourName = "Ale";
let name = {first: "Jane", Last: "Doe"}; //object
let truth = false;
let groceries = ["apple", "banana", 'oranges']; //array
let random; //undefined
let nothing = null; //null

let fruit = "banana";
let moreFruits = 'banana\napple'; // new line
console.log(fruit.length);
console.log(fruit.indexOf('x'));
console.log(fruit.slice(2,3));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase());
console.log(fruit.split(',')) // split by a comma
console.log(fruit.split('')) // split by charater

let fruits = ['bannana,', 'apple', 'orange'];
fruits = new Array('bannana,', 'apple', 'orange');
console.log(fruits[2]); //access value at index 2nd

fruits[0] = 'pear';
console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// array common methods
console.log('to string', fruits.toString());
console.log(fruits.join('*'));
console.log(fruits.pop(), fruits); //removes last item
console.log(fruits.push('blackberries'), fruits); //appends
console.log(fruits[2]);
fruits.unshift('kiwi');  //add first element to an array
fruits.shift(); //remove first element to an array

let vegetables = ['asparagus', 'tomato', 'broccoli'];
let allGroceries = fruits.concat(vegetables);
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 6, 7];
console.log(someNumbers.sort(function(a, b) {return a-b}));

let emptyArray = new Array();
for (let num = 0; num < 10; num++) {
    emptyArray.push(num);
}

console.log(emptyArray);

//objects in javascript // directories in python

let student = {
                first: 'Alex', 
                last: 'Garcia', 
                age: 29, 
                height:170,
                studentInfo: function () {
                    return this.first + '\n' + this.last + '\n' + this.age;
                }
                };
// console.log(student.first);
// console.log(student.last);
student.age++;
console.log(student.age);

console.log(student.studentInfo());


// Conditionals, Control flows (if else)
// 18-25 is my target demographic
// && AND
// || OR
var age = prompt('what is your age?');

if ((age >= 18) && (age <= 25)) {
    status = 'target demo';
    console.log(status);
} else {
    status = 'not my audience';
    console.log(status);
}

// switch statements
// differenciate between weekday vs. weekend
// day 0 --> Sunday
// day 6 --> Saturday -->
// day 4 --> Thursday --> weekday

switch (5) {
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;

    default:
        text = 'weekday';
}

console.log(text);












