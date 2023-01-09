//ceil
//floor
//round
//trunc(x)
// max(x,y,z,...n)
// min(x,y,z,...n)
// sqrt()
// cbrt()
// pow(x,y)
// random()
// abs(x)
// Pi

var num1 = 100.2354;
var num2 = 273.459;
var num3 = 5.302;
document.write(Math.ceil(num1) + "<br>"); //101
document.write(Math.floor(num1) + "<br>"); //100
document.write(Math.round(num2) + "<br>"); //273
document.write(Math.trunc(num3) + "<br>"); // 5----> here trunc remove the decimal value and only return integer value
document.write(Math.max(num1, num2) + "<br>"); //273.459
document.write(Math.min(num1, num2) + "<br>"); //100.2354
document.write(Math.sqrt(36) + "<br>"); //6
document.write(Math.cbrt(27) + "<br>"); //3
document.write(Math.pow(2, 2) + "<br>"); //4
document.write(Math.trunc(Math.random() * 100000) + 1 + "<br>"); //return random numbers if we dont pass any value in parameter also it will return value between 0 and 1
document.write(Math.abs(30.8679)+"<br>");//30.8679 return absolute value as mentioned
document.write(Math.abs(-785)+"<br>")//785
document.write(Math.abs("hello")+"<br>")//NaN
document.write(Math.PI + "<br>"); //3.141592653589793--->Constant  value
