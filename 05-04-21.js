//1 

// Write a function filterLongWords that takes a string sentence and an integer n.
// Return a list of all words that are longer than n.

function filterLongWords(sentence, n) {
    return sentence.split(" ").filter((item)=>item.length > n
    )
}


//2

//Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)
// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

function reverseNumber(n) {
    if (n >= 0){
      return +(n.toString().split("").reverse().join(""))
    } else {
      return +(n.toString().split("").reverse().filter((item)=>item != "-").join(""))*(-1)
  }
}