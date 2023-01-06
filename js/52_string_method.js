// string methods
//  01  length              
//  02  toLoweCase()
//  03  toUpperCase()
//  04  includes()
//  05  startWith()
//  06  endsWith()
//  07  search()
//  08  match()
//  09  indexOf()
//  10  lastindexOf()
//  11  replace()



var detail="Iam from India and i love India....      yeah";
document.write(detail.length+"<br>");
document.write(detail.toLowerCase()+"<br>");
document.write(detail.toUpperCase()+"<br>");
document.write(detail.includes("India")+"<br>");
document.write(detail.startsWith("I")+"<br>");
document.write(detail.endsWith("a")+"<br>");
document.write(detail.search("d")+"<br>");//return index value
document.write(detail.match(/India/g)+"<br>");//collect all the matching data and return in an array
document.write(detail.indexOf("a")+"<br>");//search letter 'a' from starting
document.write(detail.lastIndexOf("a")+"<br>");//search letter 'a' at last
document.write(detail.replace(/India/g,"Australia")+"<br>");











