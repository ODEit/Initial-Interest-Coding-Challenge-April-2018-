/*
Question 3 -- getClosingParen(sentence, openingParenIndex): 

"Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing." 

Write a function that, given a sentence like the one above, along with the position of an opening 
parenthesis, finds the corresponding closing parenthesis. 

Example: if the example string above is input with the number 10 (position of the first parenthesis), 
the output should be 79 (position of the last parenthesis).
*/

var getClosingParen = (sentence, openingParenIndex) => {
    //get an array of opening parentheses
    let parenArray = [];

    //initialize i on the opening parentheses index
    for(let i = openingParenIndex; i<sentence.length; i++){

        //push into array when there is a parantheses
        if(sentence[i]==='(')parenArray.push('(')
        
        /*return index i if sentence at index i is a 
        closing parentheses and the parenArray's length is equal to 1
        because that means that we have found the first opening parentheses' closing parantheses.
        this is because each opening parentheses has a corresponding closing parentheses but as more
        opening paretheses get added the newest ones are the ones that find their closing paretheses first
        */
        else if(sentence[i]===')' && parenArray.length === 1 ) return i

        //opening parentheses found a closing paretheses match
        else if(sentence[i] === ')') parenArray.pop()
    }
}
