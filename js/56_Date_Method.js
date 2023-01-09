// 1.toDateString()
// 2.getDate()
// 3.getFullYear()
// 4.getFullMonth()
// 5.getDay()
// 6.getHours()
// 7.getMinutes()
// 8.getSeconds()
// 9.getMilliseconds()
// 10.setDate()
// 11.setFullYear()
// 12.setHours
// 13.setMilliseconds()
// 14.setMinutes()
// 15.setMonth()
// 16.setSeconds()

var date=new Date()
document.write(date+"<br>");//Mon Jan 09 2023 23:40:53 GMT+0530 (India Standard Time)
document.write(date.toDateString()+"<br>");//Mon Jan 09 2023
document.write(date.getDate()+"<br>");//9
document.write(date.getFullYear()+"<br>");//2023
document.write(date.getMonth()+"<br>");
document.write(date.getDay()+"<br>");
document.write(date.getHours()+"<br>");
document.write(date.getMinutes()+"<br>");
document.write(date.getSeconds()+"<br>");
document.write(date.getMilliseconds()+"<br>");