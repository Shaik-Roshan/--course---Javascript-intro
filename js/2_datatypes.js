//we have two types of datatypes 1.primative datatype and 2.non primative datatypes
//1.primative datatypes  ==>number,boolean,float,string,null,undefined
//2.non primative datatypes ==>function,array and objects

//number
var num1=121;
document.write(num1);
document.write(typeof(num1));

//boolean
var booleanVal1=true;
var booleanVal2=false;

document.write(booleanVal1);
document.write(typeof(booleanVal1));

//float
var float1=988.803;

document.write(float1);
document.write(typeof(float1));

//string
var fname="roshan"
var lname='zameer'
document.write(fname);
document.write(typeof(fname));

//undefined
var empty;
document.write(empty);
document.write(typeof(empty));

// nonprimative datatypes
// arrays
var arrayVal=["html","css","javascript"];
document.write(arrayVal);
document.write(typeof(arrayVal));

//objects

var objects=
{
    bike:"bmw",car:"cadillac"
}
document.write(objects);//in javascript when you want to print value of object there it will show object as value 
document.write(typeof(objects));