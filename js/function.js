//function declartion
function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(10, 20));

// function expression

function func(a, b) {
  return a + b;
}

const newfunc = func(10, 30);
console.log(newfunc);

var a = 10;

function someting() {
  console.log(a);
  
var a =20;
console.log(a)
}
someting();
