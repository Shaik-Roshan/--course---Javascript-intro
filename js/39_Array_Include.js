//Array_include_method

var names=["roshan","zameer","Shaik","yaseen","Mohammad"];
document.write(names+"<br>");

var result=names.includes("roshan");//return true when the value roshan is present/include else return false
document.write(result+"<br>")

if(names.includes("zameer")){
    document.write("hey welcome to the team")
}else{
    document.write("hey sorry better luck next time");
}