//1

//Write a function that takes an array and counts the number of each unique element present.

// count(['james', 'james', 'john']) 
// #=> { 'james': 2, 'john': 1}

let arr = ['james', 'james', 'john']

function count(array) {
    return array.reduce((acc, item) => ({
      ...acc,
      [item]: array.filter(el => el === item).length,
    }), {});
   }

count(arr)