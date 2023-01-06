// map function is just same as for and for each loop but we find some difference here is like:

var a=[1,2,3,4,5];
document.write(a+"<br>")   //1,2,3,4,5
// if i want this 1,2,3,4,5 to multiple with 10 and become 10,20,30,40,50 then:
var b=a.map(test);
document.write(b+"<br>");//10,20,30,40,50

function test(x){
    return x*10;
}

// example:we will try this map function with array
var ary =[
    
    {fname:"yaseen",lname:"shaik"},
    {fname:"mohammad",lname:"farhan"},
    {fname:"kurulus",lname:"osman"},
];
document.write(ary+"<br>");

var ans=ary.map(res);
document.write(ans+"<br>");

function res(x){
    return x.fname +" " + x.lname;
}