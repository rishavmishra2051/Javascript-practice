function evenOdd(num){
    return num%2==0?"Even no "+num:"Odd no "+num;
}
function cube(num){
    return num**3;
}
function loop(n,fn){
    for(var i=1;i<=n;i++){
        console.log(fn(i));
    }
}
loop(5,evenOdd);
loop(5,cube);
