var a=["shaik","roshan",'zameer',"shaik"]
//index_of syntax
// indexOf("search",Start)
document.write(a+"<br>");
var b=a.indexOf("shaik");//here i get shaik of index value 0 as i dint mention from where it should start search
document.write(b+"<br>");

var b=a.indexOf("shaik",1)//here i get shaik of index value 2 as i mention it should serch after the 1 index value
document.write(b+"<br>");


//by default if it dont find the value in array it will return -1