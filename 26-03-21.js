//1 

//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    
    let arr = numbers.split(" ").sort((a,b)=> b-a)
    arr.length !== 1 ? arr.splice(1, arr.length-2) : arr.push(arr[0])
    return arr.join(" ")
      
}

//2

//Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.
//Return as a number.

function divCon(arr){
    return arr.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - (+cur),0)
  }