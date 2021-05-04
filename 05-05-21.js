//1

const numberOfLaps = function (x, y) {
  if (x > y) {
    for (let i = 1; ; i++) {
      if ((i * y) % x === 0) {
        return [(i * y) / x, i];
      }
    }
  } else {
    for (let i = 1; ; i++) {
      if ((i * x) % y === 0) {
        return [i, (i * x) / y];
      }
    }
  }
};
