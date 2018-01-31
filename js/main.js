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

if(addNumbers(50, 50) === 100){
  console.log('Congrats!!')
}
