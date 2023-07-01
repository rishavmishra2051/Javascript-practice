/*Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
Example string : ‘learn javascript from brain mentors’
Expected Output : ‘Learn Javascript From Brain Mentors*/
//code
var s='learn javascript from brain mentors';
var arr=s.split('');
arr[0]=arr[0].toUpperCase();
for(var i=0;i<arr.length-1;i++){
    if(arr[i]===' '){
        arr[i+1]=arr[i+1].toUpperCase();
    }
}
s=arr.join("");
console.log(s);
