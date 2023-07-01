/*write a function counter which increases +1 whenever it called without using global variable*/
//Self invoke function or Immidiate invoke function
//One time initialize function
//code
var fn=(function (){
    var counter=0;
    function count(){
        counter++;
        return counter;
    }
    return count;
})();
fn();

fn();
