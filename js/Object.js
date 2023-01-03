//object 
var a={
    fname:"roshan",
    lname:"zameer",
    age:21,
    country:"india",
    gmail:"roshan@gmail.com",
    cars:["CADILLAC","TATA","BMW","AUDI"],
    salary:function(){
        return 25000;
    },
    fullName:function(){
        return this.fname+" "+this.lname;
    },
    living:{
        city:"Rajasthan",
        pin:12345,
    }

}
document.write(a+"<br>");
document.write(a.fname+"<br>");
document.write(a.cars+"<br>");
document.write(a.cars[2]+"<br>");
document.write(a.salary()+"<br>");
document.write(a.fullName()+"<br>");
document.write(a.living.city+"<br>");



