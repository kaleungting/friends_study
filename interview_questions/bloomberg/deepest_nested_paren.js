function deeplyNestedParen(s) {
  let maxCount = 0;
  let maxChar;
  let currCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      currCount++;
    } else if (s[i] === ")") {
      currCount--;
    } else {
      if (currCount > maxCount) {
        maxCount = currCount;
        maxChar = s[i];
      }
      while (s[i + 1] !== "(" && s[i + 1] !== ")") {
        i++;
        maxChar += s[i];
      }
    }
  }
  return [maxCount, maxChar];
}

console.log(deeplyNestedParen("(((((((f))))))")); // —> [‘f’]
console.log(deeplyNestedParen("((a)(((bcd)))")); // —> [‘bcd']
console.log(deeplyNestedParen("(((X))(((Y))))")); // —> [‘f’]
