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

let lname=window.prompt("lname? ");
console.log(lname);


document.getElementById("p1").innerHTML="Name: " + fname +" "+ lname;

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