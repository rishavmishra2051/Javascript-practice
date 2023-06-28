var today=new Date();
var day2=today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
console.log("Today is : " + daylist[day2] + ".");
var hr=today.getHours();
var min=today.getMinutes();
var sec=today.getSeconds();
console.log("Current Time : "+hr+" : " + min + " : " + sec);
