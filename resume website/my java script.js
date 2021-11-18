//var x = "tajay jackson"
 tajay jackson is really great 
// learning about alerts
alert ("hello world");

// learning about console.log

console.log ("hello world");*/
/*
// loop through and print a-g
console.log ("loop through and print a-g")
let arr1 = ["a","b","c","d","e","f","g","h"]
for (let i=0; i<=6; i++){
	console.log(arr1[i])
}

//loop through by increment of 2
console.log ("loop through by increment of 2")
let arr2 = ["a","b","c","d","e","f","g","h"]
for (let i=0; i<=6; i+=2){
	console.log(arr2[i])
}

//loop through and print starting at b until g
console.log ("loop through and print starting at b until g")
let arr3 = ["a","b","c","d","e","f","g","h"]
for (let i=1; i<=6; i++){
	console.log (arr3[i]);
}

//loop through and print form  b to h
console.log("loop through and print form  b to h")
let arr4 = ["a","b","c","d","e","f","g","h"]
for (let i =1; i<=7; i++){
	console.log(arr4[i])
}

//loop through and print a-g incrment of 3
console.log("loop through and print a-g incrment of 3")
let arr5 = ["a","b","c","d","e","f","g","h"]
for (let i=0; i<=6; i+=3){
	console.log(arr5[i])
}


//conditionals using if statements 

const x = 25;
if (x == 19) {
console.log("x is nineteen");
} else if (x > 19) {
	console.log("x is greater than nineteen")
} else{
	console.log("x is less than nineteen")
}

// using or 

const y = 50
const i = 40
if (y > 40 || i > 30) {
	console.log(" y is more than 40 or i is more than 30");
}

// using an and condition
if (y > 40 && i > 30) {
	console.log(" y is more than 40 or i is more than 30");
}

// using turnery operation

const p = 20
const color = p > 30 ? "red" : "blue";
console.log(color);

// using switches

const z = 1
const color1 = z > 2 ? "red" : "blue";

switch(color){
	case 'red':
	 console.log('color1 is red');
	 break;
	case 'blue':
	 console.log('color1 is blue');
	 break;
	default:
	console.log('color1 is not red or blue');
	break;

}


// functions

function addNums(num1, num2) {
	return num1 + num2;
}
console.log(addNums(5, 5));

function person(firstname, lastname, dob) {
this.firstName = firstName;
this.lastname =	lastName;
this.dob = dob;
}

const person1 = new person('tajay', 'jackson', '10-26-2000');
console.log(person1);


//while loop
let value = 0
while(value!=9){
	console.log(value)
	value++;
}


let input;

var name = window.prompt("enter your name: ");
//input("your name " + name);
console.log(name)

// while loop
let name = "A"
while(name != "S"){
	name = window.prompt("enter your name: ");
console.log(name);
}


// if statement 

let sky = "blue";
if(sky == "blue"){
	console.log("it is a good day");
} else if(sky== "red"){
	console.log("it is a bad day")
} else{
	console.log("it is night")
}

var radius = window.prompt("enter radius");
let floatRadius = parseFloat(radius).toFixed(4);
//console.log(floatRadius);
let area = 3.14*(floatRadius**2);

console.log(area)



let A="small"
let B ="medium"
let c ="Large"
for(var input=0; input=3; input++){
	 var input1 = window.prompt("enter three numbers and i will tell you which is small medium and large")
if(small==A){
	console.log(small)
} else if (B<A){
	console.log(small);
}else if (C<A){
	console.log(small);
}

if(large==A){
	console.log(large)
} else if (B>large){
	console.log(large)
}else if (C>large){
	console.log(large)
}
if(A!=small&&A!=large){
	console.log(medium)
}else if(B!=small&&B!=large){
	console.log(medium)
}else if(C!=small&&C!=large){
	console.log(medium);
}
}
*/

//parseInt()


var input1 = parseInt(window.prompt("enter three numbers and i will tell you which is small medium and large"));
var input2 =parseInt(window.prompt("enter three numbers and i will tell you which is small medium and large"));
var input3 = parseInt(window.prompt("enter three numbers and i will tell you which is small medium and large"));

function findSmall(input1, input2, input3){
	let small = input1

	if(input2 < small){
		small= input2
	} 
	if(input3<small){
		small= input3
	}
   return small;
}
var NewSmall = findSmall(input1, input2, input3)
console.log(NewSmall)




function findLarge(input1, input2, input3){
	let large = input1
if(input2>large){
	large= input2
}
if(input3> large){
	large= input3
}
 return large;
}

var NewLarge =findLarge(input1, input2, input3)
console.log(NewLarge);



function findmedium(input1, input2, input3, small, large){
	let medium = input1
if(input1!=small&&input1!=large){
	medium = input1
}
if(input2!=small&&input2!=large){
	medium=input2
} 
if(input3!=small&&input3!=large){
	medium=input3
}
return medium;
}
var NewMedium = findmedium(input1, input2, input3, NewSmall, NewLarge)
console.log(NewMedium)




function findNumbers(small, medium, large){
 console.log("small =" + small)
 console.log("medium = " + medium)
 console.log("large = " + large)


}

findNumbers(NewSmall, NewMedium, NewLarge);





let num1 = 2;
let num2 =3;

function addTwoNUmber(num1, num2) {
	var sum = num1 + num2
	return sum;
}

let sumUp = addTwoNUmber(num1, num2);

console.log(addTwoNUmber(num1, num2))
console.log("This is sum up : ",sumUp)



function AddValues(){
	var sum = 1+2
	return sum;
}
console.log (AddValues())


 let A = AddValues()
 console.log(A)
*/


