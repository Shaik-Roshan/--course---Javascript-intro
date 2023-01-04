//Global and local variable 
// global variable is nothing but here when we define variable outside the block and it can also used inside the block(function)
//local variable is nothing but here we define variable inside the function and when we try to print it outside the function then it will trow an error
var fname="Roshan_Shaik";

function functionname(){
    var lname="zameer"
document.write(fname +"<br>")
document.write(lname+"<br>")
}
functionname();
document.write(fname)// here we get output as we declared variable out side the function(global variable)
document.write(lname)// here we get error bcz variable lname is defined inside the function and we are trying to print it outside the function

