//1

//Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa).
// Leave any incidence of c untouched.

//Example:

//'acb' --> 'bca'
//'aabacbaa' --> 'bbabcabb'

function switcheroo(str) {
  return str
    .split("")
    .map((el) => {
      if (el === "a") {
        return "b";
      } else {
        return el === "b" ? "a" : el;
      }
    })
    .join("");
}
