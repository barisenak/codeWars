//1

//Given a non-negative integer, return an array / a list of the individual digits in order.

function digitize(num) {
  return num
    .toString()
    .split("")
    .map((item) => +item);
}

//2

//Write function alternateCase which switch every letter in string from upper to lower and from lower to upper.
//E.g: Hello World -> hELLO wORLD

function alternateCase(str) {
  return str
    .split("")
    .map((item) => {
      if (item === item.toUpperCase()) {
        return item.toLowerCase();
      } else return item.toUpperCase();
    })
    .join("");
}
