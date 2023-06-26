console.log("lets do it...");
// window.alert("Hey!  this is how alert works");
//comment
/* another
comment*/
/* variable: is a container for storing data
two step process to create a variable:
1) Declaration -> var,let,const
2)Assignment -> =
*/
let age=19; //number Datatype
let graduated=false; //boolean Datatype
let fname="isha"; //string Datatype


console.log(age);
console.log("age");
console.log(fname);
console.log(graduated);

console.log(age+1);
console.log(age+'1'); //concatinate
console.log(age-'1'); //19-1=18

//fetch elements/attributes

document.getElementById("p1").innerHTML="Name: " + fname;
document.getElementById("p2").innerHTML="age: " + age;
document.getElementById("p3").innerHTML="graduated: " + graduated;

/* arithmetic expression is a combination of...
operands 
operators +,-,*,/
*/

let student=40;
student=student+1;
student=student-1;

let extraStudents=student%3;

student*=2;   //augmented operator

console.log(student);
console.log("extras" + extraStudents);

//accepting user input
/*
1) prompt
2) html input
*/

// let lname=window.prompt("lname? ");
// console.log(lname);


// document.getElementById("p1").innerHTML="Name: " + fname +" "+ lname;

inputText=document.getElementById("text");
inputText.addEventListener('click',()=> {
    inputText.value="";
});

let branch;
document.getElementById("btn").onclick=function(){
    branch=document.getElementById("text").value;
    document.getElementById("labelId").innerHTML=branch;
}

// type conversion

let day=window.prompt("Its your day no....");
console.log(typeof(day));
day=Number(day);//conversion
console.log("Its your day "+day+" with js");

let z=Boolean("pizza");
console.log(z,typeof(z));

// let pi=3.14;
let r=4;
// pi=4.13;
const pi=3.14; //constants-> cant be changed
let circumference=2*pi*r;
console.log(circumference);

// math in js
let x=4.5;
console.log(Math.round(x));
console.log(Math.ceil(x));
console.log(Math.floor(x));
console.log(Math.sqrt(x));

// let a;
// let aInput=document.getElementById("texta");
// a=Number(aInput.value);
// let b;
// let bInput=document.getElementById("textb");
// b=Number(bInput.value);
// let submitBtn=document.getElementById("submkitBtn");
// let c;
// c=Math.sqrt(a**2+b**2);
// console.log(c);
// let clabel=document.getElementById("c");
// clabel.innerHTML="side c: " + c;
    





// COUNTER_APP
let counter=document.getElementById("countLabel");
let count=0;
let reset=document.getElementById("resetBtn");
let inc=document.getElementById("incBtn");
let dec=document.getElementById("decBtn");

reset.addEventListener("click",()=>{
    count=0;
    counter.innerText=count;
});

function increment(){
    count+=1;
    counter.innerText=count;
}
function decrement(){
    count-=1;
    counter.innerText=count;
}

inc.addEventListener("click",increment);
dec.addEventListener("click",decrement);

// random number generation
// /string properties in js
// replace, split, length, toLowerCase, match,includes,indexOf, charAt ,concat , endswith, startsWith trim replaceAll slice

// method chaining-> calling one method aftere another in single line of code

// if 


document.getElementById("subBtn").onclick= function(){
    if(document.getElementById("myCheckBox").checked) {
        window.alert("you are subscribed");
    }

}

// /switch
// && || !
// while loop
// do-while
// for loop
// break
// continue
// nested loop=> creating a rextangle (pattern) -> .innerHtml+=j
// functions
// ternary 
// template literal ``
// toLocaleString

// let num=100;


// num=num.toLocaleString("hi-IN");


// num=num.toLocaleString("hi-IN",{style:"currency",currency:"INR"});
// num=num.toLocaleString(undefined,{style:"percent"});


// num=num.toLocaleString(undefined,{style:"unit",unit:"celcius"});
// console.log(num);


// Number guessing game//

const answer=Math.floor(Math.random()*10+1);
let guesses=0;

document.getElementById("submitButton").onclick=function(){
    let guess=document.getElementById("guessField").value;
    guesses+=1;
    if(guess==answer){
        alert(`${answer} is the #. It took you ${guesses} number of guesses.`);
    }
    else if(guess<answer){
        alert("Too small");

    }
    else{
        alert("too large");
    }

}

// arrays in js

let nums=[2,3,4,5,6];
console.log(nums.length);
console.log(nums);
nums.push(8);
console.log(nums);
nums.pop();
console.log(nums);
nums.unshift(1);
console.log(nums);
nums.shift();
console.log(nums);
console.log(nums.length);
let indexOf8=nums.indexOf(8);
if(indexOf8!=-1){
    console.log("8 present ");
}else{
    console.log("8 not present");
}

// for-of-loop

let fruits=["mango","banana","orange","apple"];
// sorting array of strings
fruits=fruits.sort();
// reverse sorting
fruits=fruits.sort().reverse();
// note there is a catch while sorting arrays containing integers in js 

for(let fruit of fruits){
    console.log(fruit);
}

// 2D array
// spread -> useful when you want to send varying amout of parameter to a function

//allows iterables like arrays and strings to be expanded in places when zero or more arguments are expected (unpack the elements )


// rest operator->  represents an indefinite number of parameters (pack arguments into an array)

let a=1;
let b=2;
let c=3;
let d=4;
let e=5;
let f;//NaN

console.log(sum(a,b));

function sum(...digits){
    let total=0;
    for(let digit of digits){
        total+=digit;
    }
    return total;
}


// callback

// Array.forEach() -> executes the provided callback fn once for eachh array element 

let lang=["js","python","ruby","swift"];
lang.forEach((element,index,array)=>{
    array[index]=element[0].toUpperCase()+element.substring(1);
});
lang.forEach((element)=>{
    console.log(element);
});

//array.map()-> creates an array with executing callback fn for each elemnt 
let arr=[1,2,3,4];

let sq=arr.map((element)=>{
    return Math.pow(element,2);
});
console.log(sq);

// array.filter();
//creates a new array with all the elements that pass the test

let ages=[18,35,67,12];
let adults=ages.filter(checkAge);
adults.forEach(print);
function checkAge(element){
    return element>=18;
}
function print(element){
    console.log(element);
}


// reduce-> array.reduce()-> reduces array to a single element

let prices=[5,10,32,50];
// reducing these prices to a single value by calculating sum
let total=prices.reduce(CheckOut);
console.log(`Total is: ${total}`);
function CheckOut(total,element){
    return total+element;
}

// sorting arrays of numbers::::: we use callback f to sort array of numbers unlike array of strings where we directly use sort fn

let grades=[100,89,88,59,92];
// descending order
grades=grades.sort(function(x,y){
    return y-x;
});
console.log(grades);

// /ascending order sort
// **************************************************
grades=grades.sort(ascendingSort);
function ascendingSort(x,y){
    return x-y;
}

console.log(grades);

// function-expression

// let count=0;
// document.getElementById("incBtn").onclick=function(){
//     count+=1;
//     document.getElementById("label").innerHTML=count;
// }


// arrow function

const greeting=function(uername){
    console.log(`Hello ${uername}`);
}
greeting("bro");

// or arrow fn->

const greet=(userName)=>
    console.log(`hello ${userName}`);

greet("bro");

// shuffling-> often used in card games or password generators

let cards=['a','1','8','A','*'];
shuffle(cards);
console.log(cards);

function shuffle(array){
    let currentIndex=array.length;
    while(currentIndex!=0){
        let randIndex=Math.floor(Math.random()*array.length);

        let temp=array[currentIndex];
        array[currentIndex]=array[randIndex];
        array[randIndex]=temp;
    }
    return array;
}

// map in js

const store=new map([
    ["shirt",300],
    ["jeans",500],
]);
console.log(store.size);
store.forEach((key,value) => console.log(`${key} ${value}`));

// objects

const car={
    model:"mustang",
    color:"red",
    year:2023,

    drive: function(){
        console.log('Hey! i am driving');
    },

    brake: function(){
        console.log("Hey! Brake failed..");
    }
}
console.log(car.year);
car.drive();
console.log(car.model);

const car2={
model:"mustang",
color:"red",
year:2023,

drive: function(){
    console.log(`Hey! i am driving car ${this.model}`);
},

brake: function(){
    console.log("Hey! Brake failed..");
}
}

// this keyword 
// class

class player{
    score=0;
    pause(){
        console.log("Paused");
    }
    exit(){
        consolee.log("exited");
    }
}
// creating object
const player1=new player;
player1.score+=1;
const player2=new player;

// constructor

class stu{
    constructor(name,age,gpa){
        this.name=name;
        this.age=age;
        this.gpa=gpa;
    }
    study(){
        console.log(`${this.name} do studies`);
    }

}
const student1= new stu("Bob",19,8.5);
console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();

// static keyword

class cars{
    static countCar=0;
    constructor(model){
        this.model=model;
        this.countCar+=1;
    }
}
//static variables are accessed through class and not through objects
//anything (method/variable) that is static belongs to class and not to individual objects

const c1=new car("mustang");
const c2=new car("BMW");
console.log(car.countCar);

//static fn-> cars.funName();

// inheritance -> extend keyword

class Animal{
    alive=true;
    eat(){
        console.log(`This ${this.name} is eating`);
    }

}
class Rabbit extends Animal{
    name="Rabbit";
    run(){
        console.log(`This ${this.name} runs`);
    }
}
const rabbit=new Rabbit();
//obj is made of child class 
console.log(rabbit.alive);
rabbit.eat();
rabbit.run();

// super keyword-> invoke constructor of parent class

class animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
class rabs extends animal{
    constructor(name,age,runSpeed){
        super();
        this.runSpeed=runSpeed;
    }
}

const rab=new rabs("rab",4,40);

// super class helps to increase reusability and makes the code clean by summing all common propereties into constructor of parent class
//in order to specify some unique property , specify it  individually

// arrray of objects

// anonymous objcets-> objects without name

class card{
    constructor(value,suit){
        this.value=value;
        this.suit=suit;
    }
}
let cds=[new card("A","Hearts"),
new card("A","Diamond")]; //can be acccessed using forEach Loop


// error