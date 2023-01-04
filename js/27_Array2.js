// //Simple method

// var a=new Array();//here in this we can store 'n' number of values

// a[0]="roshan";
// a[1]="zameer"
// a[2]=89;
// a[3]=97;

// for(b=0;b<=3;b++){
//     document.write("<li>"+a[b]+"<br>"+"</li>");
// }

// //Another Method
// var other=new Array(2);

// other[0]="Mohammad";
// other[1]="yaseen";
// other[2]="shaik";
// other[3]="Waheed";//not considered because  new Array is reserved for only 2
// other[4]="Fazil";//not considered because  new Array is reserved for only 2

// for(next=0;next<=2;next++){
//     document.write(other[next]+"<br>");
// }

 //collecting input from user by using prompt

 var user_name=new Array(3);
 
 for(var collect=0; collect<3; collect++){
    user_name[collect]=prompt("enter value")
 }
 
 for(var fname=0;fname<3;fname++){
    document.write("<li>"+user_name[fname]+"</li>");
 }

