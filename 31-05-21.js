// _.zipObject([props=[]], [values=[]])
// => { 'a': 1, 'b': 2 }

function zipObject(props, values) {
  return props.reduce((acc, el, index) => {
    if (props.length) {
      return {
        ...acc,
        [el]: values[index],
      };
    } else return acc;
  }, {});
}

zipObject(["a", "b"], [1, 2]);
