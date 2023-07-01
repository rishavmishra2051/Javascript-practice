/*Given two strings, return true if they are anagrams of one another
For example: Mary is an anagram of Army*/
//code
function string_anagram(str1,str2){
    var arr1=str1.split("");
    var arr2=str2.split("");
    if(arr1.length!=arr2.length){
        return false;
    }
    else{
        arr1.sort();
        arr2.sort();
        for(var i=0;i<arr1.length;i++){
            if(arr1[i]!==arr2[i]){
                return false;
            }
        }
        return true;
    }
}
string_anagram("mary","army");
