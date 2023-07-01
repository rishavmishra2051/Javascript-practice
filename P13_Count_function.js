/*write a function counter which increases +1 whenever it called without using global variable*/
//code
function init(){
    var counter=0;
    function count(){
        counter++;
        return counter;
    }
    return count;
}
var fn=init();
fn();
