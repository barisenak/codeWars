//1 

//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    
    let arr = numbers.split(" ").sort((a,b)=> b-a)
    return [
        arr[0], 
        arr[arr.length - 1]
      ].join(" ")
      
}

//2

//Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.
//Return as a number.

function divCon(arr){
    return arr.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - (+cur),0)
  }