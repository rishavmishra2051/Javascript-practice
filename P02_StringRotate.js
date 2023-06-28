var s="brainmentors";
for(var i=0;i<s.length;i++){
    const array=s.split("");
    var t=array.pop();
    array.unshift(t);
    s=array.join("");
    console.log(s);
}
