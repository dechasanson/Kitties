function stringContainsNumber(string) {
  return /\d/.test(string);
}

function containsSpecialChars(string) {
  let specialChars = /[!@#$%^&*()_+\-=[\]{};':"|,.<>/?]+/;
  return specialChars.test(string);
}

export {
  stringContainsNumber,
  containsSpecialChars
};