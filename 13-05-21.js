// const input = [
//   { id: 1, name: "1" },
//   { id: 1, name: "1" },
//   { id: 2, name: "2" },
//   { id: 1, name: "1" },
//   { id: 3, name: "3" },
// ];

// // output:
// // [
// //   { id: 1, name: '1' },
// //   { id: 2, name: '2' },
// //   { id: 3, name: '3' }
// // ]
// //

// function uniqueBy(arr, attr) {
//   return arr.reduce((acc, curr) => {
//     if (acc.find((el) => el[attr] === curr[attr])) {
//       return acc;
//     } else {
//       return [...acc, curr];
//     }
//   }, []);
// }

// console.log(uniqueBy(input, "id"));

function square(n) {
  return n * n;
}

function add(n1, n2) {
  return n1 + n2;
}

function flow(effects) {
  return (...params) => {
    return effects.reduce((acc, curr) => {
      return [curr(...acc)];
    }, params)[0];
  };
}

// square( add(1, 2) );
var addSquare = flow([add, square]);

console.log(addSquare(1, 2)); // => 9

// lodash
// flowRight -> ?
// TODO: implement flowRight
