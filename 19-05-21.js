//flowRight

function square(n) {
  return n * n;
}

function add(n1, n2) {
  return n1 + n2;
}

function flowRight(effects) {
  return (...params) => {
    return effects.reverse().reduce((acc, curr) => {
      return [curr(...acc)];
    }, params)[0];
  };
}

var addSquare = flowRight([square, add]);
addSquare(1, 2);

//
//
//
//
//
//
//

//_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]

function compact(arr) {
  return arr.filter((item) => item != false);
}

compact([0, 1, false, 2, "", 3]);

//
//
//
//
//
//
//
//
//

//_.difference([2, 1], [2, 3]);
// => [1]

function difference(arr, conclusion) {
  return arr.filter((item) => conclusion.indexOf(item) === -1);
}

difference([2, 1], [2, 3]);

//
//
//
//
//
//
//
//

//join(['a', 'b', 'c'], '~');
// => 'a~b~c'

function join(arr, separator) {
  return arr
    .map((item, id) => {
      if (id !== arr.length - 1) {
        return item + separator;
      } else return item;
    })
    .reduce((acc, curr) => {
      return acc + curr;
    }, "");
}

join(["a", "b", "c"], "~");
