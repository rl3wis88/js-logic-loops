console.log('JS Logic Loops');

/* if statements */
if('foo' === 'foo'){
  console.log('Of course these strings are equal!');
}

if(5 > 10){
  console.log('You will NEVER see this.');
} else {
  console.log('You will ALWAYS see this!');
}

// write a new if statement
// that checks if a number stored in a var
// is greater than 100

var x = 100;

if(x > 100){
  console.log('How am I doin?');
} else {
  console.log(x + 'is not > 100');
}
// if the var is NOT > 100, let the user know what it was.

// is a string stored in a variable, the same as another string?
var myString = 'foo';
if(myString === 'foo'){
  console.log('Hey, here you are!');
} else {
  console.log('You are in the else');
}
// The else if statement
if(5 < 4){
  console.log('you will not end up here');
} else if(5 >= 5){
  console.log('you will end up here');
} else {
  console.log('you will not end up here either');
}
// a function that returns something
function topSpeed(){
  return (75 + 5); // return the number 80
}
console.log(topSpeed());// logs the number 80

// write a function that accepts arguments
// this now means that we are required to provide values for those arguments
// when we invoke the function
function addNumbers(num1, num2){
  return (num1 + num2); // the values of my arguments are now used as variables inside my function
}
console.log(addNumbers(100, 3000)); // logs 3100 to the console

// returns true
if(addNumbers(50, 50) === 100){
  console.log('Congrats!!')
}


// This function does not return anything, we just 'do something' immediately
// This is a name function
function fullName(fName, lName){
  console.log(fName + ' ' + lName)
};

fullName('Ralph', 'Lewis');

// we cam also create a function and store it in a variable
var myGreatFunc = function(){
  console.log('function stored in var');
};



// 1) Write a function that accepts an argument. Let's call it door
function openDoor(door){
  console.log(door);
  // based on the value of door, log a prize
  if(door === 'orange'){
    console.log('you opened the orange door you win a basketball');
  } else if(door === 'red'){
    console.log('you opened the red door, you win a football');
  }
}

// 2) Based on the value of 'door', console.log prize.
openDoor('orange');

var foo = {
  color: 'red'
};
console.log(typeof foo.color);


var cartoons = ['spiderman', 'batman', 'wolverine'];
console.log(cartoons.length); // this will log however many you have 
