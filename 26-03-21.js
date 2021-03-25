//1 

//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    
    let arr = numbers.split(" ").sort((a,b)=> b-a)
    arr.length !== 1 ? arr.splice(1, arr.length-2) : arr.push(arr[0])
    return arr.join(" ")
      
    }