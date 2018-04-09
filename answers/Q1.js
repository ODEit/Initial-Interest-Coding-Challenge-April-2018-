/*

Question 1 -- sumOfTwo(a,b,v): 
You have two integer arrays, a and b, and an integer target value v. 
Determine whether there is a pair of numbers, where one number is taken 
from a and the other from b, that can be added together to get a sum of v. 
Return true if such a pair exists, otherwise return false.

*/

var sumOfTwo = (a,b,v) => {

    //Create a tracker that keys in the values in array b
let objTrackB; 

    //Key in values
for(let i = 0; i<b.length; i++){
    objTrackB[b[i]] ? null: objTrackB[b[i]] = true  
}

    //check if v, the target, minus a[i] is either in the object or not
    //if it is return true
for(let i = 0; i<a.length; i++){
    if(objTrackB[v-a[i]]) return true
}

    //if you exit out of the forloop without hitting any truthy return false
    //no need to check if v-b[i] would be in a, because that is in a way done already by doing v-a[i]
return false
} 

