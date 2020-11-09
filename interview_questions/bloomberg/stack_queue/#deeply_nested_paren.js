function deeplyNested(s) {
  let max = 0;
  let currMax = 0;
  for (let char of s) {
    if (char === "(") {
      max = Math.max(max, ++currMax);
    }

    if (char === ")") {
      currMax--;
      if (currMax < 0) return -1;
    }
  }

  return max;
}

console.log(deeplyNested("b) (c) ()"));
