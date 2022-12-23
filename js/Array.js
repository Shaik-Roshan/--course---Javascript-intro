var names=[99,70,87,98,87,95]

document.write(typeof(names)+"<br>")
document.write(names[2]+"<br>"+"<br>")

//output

// object
// 87
var sum=0;
document.write("<ul>")
for(var fname=0;fname<=5;fname++){
    document.write("<li>"+names[fname]+"<br>"+"</li>")
    sum=sum+names[fname];
}
document.write("</ul>")
document.write("total sum:"+sum);

//output

// 99
// 70
// 87
// 98
// 87
// 95

// total sum:536