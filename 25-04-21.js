const input = [
  { id: "t", name: "Tesla" },
  { id: "t", name: "Tesla" },
  { id: "t", name: "Tesla" },
  { id: "a", name: "Audi" },
  { id: "a", name: "Audi" },
  { id: "m", name: "Mercedes-Benz" },
  { id: "m", name: "Mercedes-Benz" },
  { id: "m", name: "Mercedes-Benz" },
  { id: "m", name: "Mercedes-Benz" },
];

// OUTPUT:
//
// {
//   't': 3,
//   'a': 2,
//   'm': 4,
// }
//

const func = (input) => {
  return input.reduce((acc, item, index) => {
    if (acc[item.id]) return acc;
    return {
      ...acc,
      [item.id]: input.filter((el) => el.id === item.id).length,
    };
  }, {});
};

func(input); // returns {output}
