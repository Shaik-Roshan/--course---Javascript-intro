//variables
// there are 3 types of variable  1.var 2.let 3.const

var x = "hey whassup ";
var y = 10.10;
var z = 100;


//first we can declare variable and then assign value like below
var fname,lname;
fname="roshan";
lname="zameer"
document.write(fname);
document.write(lname);


document.write(x);

document.write(y);
x="roshan zameer"// we can also do override but here we dont use var keyword again 
document.write(x);

document.write(z);


// Naming convention that allow to create a variable Name:

// firstname
// first_name
// first-name
// firstName
// firstname99

// Naming convention that doest now allow to create variable

// first name
// 99firstname
//  var name="roshan" /var name='roshan'  (we can give value for the varaible like if it is string we should either give the value in single quotes or in double quotes)

/*let is used as a variable but differnce between let and var is like in var once you declare it
you can override by again declaring the variable  and in let  u can not use let keyword again once it is declared */

let bike1="yamaha";
  bike1="r15";//only we use variable name to override the value
document.write(bike1);


/* we also have const variable in this we cannot declare variable and assign new value once it is declared and assigned */

const myfriend="yaseen";
// myfriend="mohammad";
document.write(myfriend);
