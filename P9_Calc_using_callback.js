function Calc(){
    var add=function(x,y){
        return x+y;
    }
    var sub=function(x,y){
        return x-y;
    }
    var mul=function(x,y){
        return x*y;
    }
    var div=function(x,y){
        return x/y;
    }
    return [0,add,sub,mul,div];
}
function calculator(x,y,n){
    return Calc()[n](x,y);
}
var a=parseInt(prompt("Enter first number: "));
var b=parseInt(prompt("Enter second number: "));
var c=parseInt(prompt("Enter 1 for add, 2 for subtract, 3 for multiply, 4 for divide: "));
alert("Result is "+calculator(a,b,c));
