// Example_1:

var num=prompt("enter the number") // if we wanr to take number from user we use this 
if (num%2==0)
{
    document.write("you have entered even number"+"<br>")
}
else{
    document.write("you have entered odd number"+"<br>")
}
// Example_2:
for(var a=1;a<=100;a++){
    if(a%2==0){
        document.write("even number:"+a+"<br>");
    }
}