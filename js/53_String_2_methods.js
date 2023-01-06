//  12  trim()
//  13  charAt()
//  14  charCodeAt()
//  15  fromCharCode()
//  16  concat()
//  17  split()
//  18  repeat()
//  19  slice()
//  20  substr()
//  21  substring()
//  22  toString()
//  23  valueOf()


//      trim()
var a="   javascript   ";
// alert(a);// we can se space initially
var b=a.trim();
// alert(b) //after using trim method space is removed

//charAt()

var fname="RoshanShaik";
var lname="zameer"
document.write(fname.charAt(0)+"<br>");
// document.write(fname.charCodeAt(118)+"<br>");
// document.write(fname.fromCharCode(112,124));
document.write(fname.concat(lname)+"<br>");
document.write(fname.repeat(5)+"<br>");
document.write(fname.slice(3,10)+"<br>");


