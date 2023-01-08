// converting other types into number

//number()
var a = "99";
var b = Number(a);
document.write(typeof a + "<br>"); //string
document.write(typeof b + "<br>"); //number

document.write(b + 1 + "<br>"); //100

// parseInt()
var num1 = "121 65 95";
var result1 = parseInt(num1 + "<br>");
var num2 = 101.25;
var result2 = parseInt(num2);
document.write(result1 + "<br>"); //121
document.write(result2 + "<br>"); //101

//parseFloat()

var num3 = 10.31263;
var result3 = parseFloat(num3);
document.write(result3 + "<br>"); //10.31263

var result4 = parseInt(num3);

document.write(result4 + "<br>"); //10

//isFinite()
var z = -100;
document.write(isFinite(z) + "<br>"); //true

var y = -1.55;
document.write(isFinite(y) + "<br>"); //true

var x = "100";
document.write(isFinite(x) + "<br>"); //true

var w = "hello";
document.write(isFinite(w) + "<br>"); //false

var v = Infinity;
document.write(isFinite(v) + "<br>"); //false

//isInteger
var a1 = "roshan";
document.write(Number.isInteger(a1) + "<br>"); //false
var a2 = 100;
document.write(Number.isInteger(a2) + "<br>"); //true
var a3 = true;
document.write(Number.isInteger(a3) + "<br>"); //false
var a4 = 52.14;
document.write(Number.isInteger(a4) + "<br>"); //false
var a5 = -789;
document.write(Number.isInteger(a5) + "<br>"); //true

// toFixed()
var b1 = 10.2365;
document.write(b1.toFixed(2) + "<br>"); //10.24
document.write(b1.toFixed(3) + "<br>"); //10.236
document.write(b1.toFixed(4) + "<br>"); //10.2365

// toPrecision()
var b2 = 5.36789;
document.write(b2.toPrecision(2) + "<br>"); //5.4
document.write(b2.toPrecision(3) + "<br>"); //5.37
document.write(b2.toPrecision(4) + "<br>"); //5.368
