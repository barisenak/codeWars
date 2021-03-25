//1

//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, 
// or ")" if that character appears more than once in the original string. 
//Ignore capitalization when determining if a character is a duplicate.


function duplicateEncode(word){
    let result = {}
    let arr = word.toLowerCase().split("")
    arr.forEach((item)=>{
      result[item] ? result[item]++ : result[item] = 1
    })
    return arr.map((item)=>{
      return result[item] == 1 ? "(" : ")"
    }).join("")
}

//2

//You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
//The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
//Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(arr){
    let odd = arr.filter(el => el % 2 === 0).length
    return arr.find((item) =>{
     return odd === 1 ? item % 2 === 0 : item % 2 !== 0
    })
  }