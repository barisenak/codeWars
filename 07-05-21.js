var object = { a: 1, b: "2", c: 3 };

const pick = (obj, arr) => {
  return arr.reduce((acc, curr) => {
    if (Object.keys(obj).includes(curr)) {
      console.log(acc);
      return {
        ...acc,
        [curr]: obj[curr],
      };
    }
  }, {});
};

pick(object, ["a", "c"]);

// => { 'a': 1, 'c': 3 }
