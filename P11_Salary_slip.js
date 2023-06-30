function salary(bs){
    var hra=function() {
        return bs*0.30;
    }
    var da=function() {
        return bs*0.10;
    }
    var ta=function() {
        return bs*0.20;
    }
    
    var td=function() {
        return bs*0.10;
    }
    return {hra,da,ta,gs,td,ns};
}
var bs=parseInt(prompt("Enter the salary of employee"));
var emp=salary(bs);
var gs=function() {
    return emp.hra()+emp.da()+emp.ta()+bs;
}
var ns=gs(bs)-emp.td();
console.log("Salary slip of employee");
console.log("HRA: "+emp.hra());
console.log("DA: "+emp.da());
console.log("TA: "+emp.ta());
console.log("Gross Salary: "+gs(bs));
console.log("Tax Deduction: "+emp.td());
console.log("Net Salary: "+ns);
