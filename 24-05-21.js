// _.fromPairs(pairs)

function fromPairs(arr) {
  return arr.reduce((acc, curr) => {
    return {
      ...acc,
      [curr[0]]: curr[1],
    };
  }, {});
}

fromPairs([
  ["a", 1],
  ["b", 2],
]);

//
//
//
//
//

// _.nth(array, [n=0])

const array = ["a", "b", "c", "d"];

function nth(arr, id) {
  return arr[id];
}

nth(array, 1);

//
//
//
//
//

//_.pullAt(array, [indexes])

var array = ["a", "b", "c", "d"];

function pullAt(arr, arrOfIndexes) {
  array = arr.filter((el) => !arrOfIndexes.includes(arr.indexOf(el)));
  return arr.filter((el) => arrOfIndexes.includes(arr.indexOf(el)));
}

var pulled = pullAt(array, [1, 3]);

console.log(array);
// => ['a', 'c']

console.log(pulled);
// => ['b', 'd']
