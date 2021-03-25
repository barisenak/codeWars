//1

//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, 
// or ")" if that character appears more than once in the original string. 
//Ignore capitalization when determining if a character is a duplicate.


function duplicateEncode(word){
    let result = {}
    let newWord = []
    let arr = word.toLowerCase().split("")
    arr.forEach((item)=>{
      result[item] !== undefined ? ++result[item] : result[item] = 1
    })
    arr.map((item)=>{
      result[item] == 1 ? newWord.push("(") : newWord.push(")")
    })
    return newWord.join("", "")
}



//2
//You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
//The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
//Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(arr){
    let odd = 0
    let even = 0
    arr.forEach((item) =>{
      item % 2 === 0 ? odd++ : even++
    })
    return arr.find((item) =>{
     return odd < even ? item % 2 === 0 : item % 2 !== 0
    })
  }