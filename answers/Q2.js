/*
Question 2 -- stringReformatting(string):

The string s contains dashes that split it into groups of characters.
You are given an integer k that represents the number of characters 
in groups that your output should have. Your goal is to return a new 
string that breaks s into groups with a length of k by placing dashes 
at the correct intervals. If necessary, the first group of characters 
can be shorter than k. It is guaranteed that there are no consecutive dashes in s. 


For s = "2-4a0r7-4k" and k = 4, the output should be stringReformatting(s, k) = "24a0-r74k"; 

The input string "2-4a0r7-4k" is split into three groups with lengths of 1, 5 and 2. 
Since k = 4, you need to split the string into two groups of 4 characters each, making 
the output string "24a0-r74k". 

For s = "2-4a0r7-4k" and k = 3, the output should be stringReformatting(s, k) = "24-a0r-74k". 

Given the same input string and k = 3, split the string into groups of 2, 3, and 3 characters 
to get the output string of "24-a0r-74k".

*/

var stringReformatting = (string, k) => {

//get two strings, one without the dashes for safe reference, one to create an output string
let tempString = ''
let outputString = ''

//create tempString without dashes
for(let i = 0 ; i<string.length; i++){
    if(string[i]==='-') null
    else {tempString+=string[i]}
}

//find the place in the tempString where we need a dash where i is less than k
let remainder = tempString.length %k

for(let i = 0; i<tempString.length; i++){
    //when i is equal to the remainder we need a dash
    if(remainder && i === remainder ) outputString+= '-'

    //add '-' when i isnt equal to zero, isn't the equal to tempString's last character, and is a group of k
    else if(i!== 0 && i!==tempString.length-1 && !((i-remainder)%k)) outputString+='-'
    
    //need to add characters in tempString to outputString no matter what
    outputString+=tempString[i]
    
    //edge case needs to account for when k = 1 and i is equal to tempString length - 2
    if(k === 1 && i === tempString.length-2)  outputString+='-'   
}

return outputString
}