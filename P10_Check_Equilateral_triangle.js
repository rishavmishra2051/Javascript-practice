function trio(x,y,z){
    return (x==y&&x==z)?"Triangle is Equilateral":"Triangle is Not Equilateral";
}
function Triangle(x,y,z,fn){
    return fn(x,y,z);
}
Triangle(5,5,5,trio);
var a=parseInt(prompt("Enter first side of triangle: "));
var b=parseInt(prompt("Enter second side of triangle: "));
var c=parseInt(prompt("Enter third side of triangle: "));
alert(Triangle(a,b,c,trio));
