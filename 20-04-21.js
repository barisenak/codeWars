// 1

//Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing.
// The function should return either True or False.

//For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces.

function validSpacing(str) {
  return (
    str
      .trim()
      .split("")
      .filter((el) => el === " ").length <= 1
  );
}
