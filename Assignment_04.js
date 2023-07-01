/*Find Occurance of a target value in given array;
arr= [19, 22, 18, 19, 16, 18, 19, 21, 24];
target = 19;*/
//code
var arr=arr= [19, 22, 18, 19, 16, 18, 19, 21, 24];
arr.filter(e=>e==19);
arr.filter(e=>e==19).length;

/*Reverse a given string using reverse() method 
input = "BrainMentors"
output = "srotnemniarB"*/
//code
var s="brainmentors";
var arr=s.split('');
arr.reverse();
arr.join("");

/*Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
Count of vowels in string;
ex:- str = "brainmentors"
		output: count = 4*/
//code
var str = "brainmentors";
var arr=str.split("");
arr.filter(e=>(e=='a'||e=='e'||e=='i'||e=='o'||e=='u'));
(4) ['a', 'i', 'e', 'o']
arr.filter(e=>(e=='a'||e=='e'||e=='i'||e=='o'||e=='u')).length;

/*Write a function to find the sum of all elements in an array.
ex:- arr = [1,2,3,4,5];
output = 15;*/
//code
var arr = [1,2,3,4,5];
arr.reduce((acc,e)=>acc+e,0);

/*Write a function to reverse the order of elements in an array.
don't Use reverse() Method 
ex:- var arr = ['a','b','c','d','e','f']	
		output = ['f','e','d','c','b','a']*/
//code
var arr = ['a','b','c','d','e','f'];
arr.sort((a,b)=>b.localeCompare(a));

/*Write a function to remove a specific element from an array.
	arr = [1,2,3,4,5];
	remove = 3
	output :- [1,2,4,5]*/
//code
var arr = [1,2,3,4,5];
arr.filter(e=>(e!=3));

/*Write a function to find the second largest number in an array.
ex:- var arr = [12,4,6,9,2,15,3,9];
		output second largest : 12*/
//code
var arr = [12,4,6,9,2,15,3,9];
arr.sort((a,b)=>a-b)[arr.length-2];

/*Write a function to rotate an array by a given number of steps to the right.
ex:- arr = [1,2,3,4,5];
 step = 2;
 output = [5,4,1,2,3]*/
//code


/*Write a function to find the intersection of two arrays (common elements between the two arrays).
ex:- arr1 = [2,4,1,7,4,2] , arr2 = [5,1,4,7,3,1];
output = [1,4,7]*/
//code
var arr1 = [2,4,1,7,4,2];
var arr2 = [5,1,4,7,3,1];
var result1=[];
var result2=[];
arr1.sort((a,b)=>a-b);
arr1.forEach((n,i)=>{
    if(arr1[i]!=arr1[i+1]){
        result1.push(arr1[i]);
    }
});
arr2.sort((a,b)=>a-b);
arr2.forEach((n,i)=>{
    if(arr2[i]!=arr2[i+1]){
        result2.push(arr2[i]);
    }
});
result1.filter(e=>result2.includes(e));

/*Write a function to remove duplicate elements from an array while preserving the original order.
	ex:- arr = [1,2,5,2,5,1,6,7,7]
	output:- [1,2,5,6,7]*/
//code
var result=[];
arr.sort((a,b)=>a-b);
arr.forEach((n,i)=>{
    if(arr[i]!=arr[i+1]){
        result.push(arr[i]);
    }
});
result;
