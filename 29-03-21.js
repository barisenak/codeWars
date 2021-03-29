//1

//Write a function that takes an array and counts the number of each unique element present.

// count(['james', 'james', 'john']) 
// #=> { 'james': 2, 'john': 1}

let arr = ['james', 'james', 'john']

function count(array){
    let obj = {}
    array.forEach((item)=>{
    if (obj[item] > 0){
    obj.item = obj[item]++
    } else {
    obj[item] = 1
    }
    })
    console.log(obj)
    delete obj.item
    return obj
}

count(arr)


