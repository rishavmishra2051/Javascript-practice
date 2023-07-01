/*Write a function to find the maximum and minimum elements in an array.
arr = [10,3,15,-1,9,6]
output = maxno. : 15,minno. : -1
*/
//code
var arr=[10,3,15,-1,9,6];
function min_max_in_array(arr){
    var max_value=function () {
        var max=Number.MIN_VALUE;
        for(var i=0;i<arr.length;i++){
            if(max<arr[i]){
                max=arr[i];
            }
        }
        return max;
    }
    var min_value=function () {
        var min=Number.MAX_VALUE;
        for(var i=0;i<arr.length;i++){
            if(min>arr[i]){
                min=arr[i];
            }
        }
        return min;
    }
    return {max_value,min_value};
}
var obj=min_max_in_array(arr);
console.log(obj.max_value());
console.log(obj.min_value());
