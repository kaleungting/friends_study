/*
if chars length is 0, return 0;
create a sliding window
keep track of current character - starts at char[0]
have a counter that starts at 0;

*/

var compress = function (chars) {
  if (!chars.length) return 0;
  let l = 0;
  let cur = chars[0];
  let counter = 0;
  for (let r = 0; r <= chars.length; r++) {
    if (chars[r] === cur) {
      counter++;
    } else {
      chars[l] = cur;
      if (counter > 1) {
        const s = counter.toString();
        for (let k = 0; k < s.length; k++) {
          chars[(l += 1)] = s[k];
        }
      }
      l++;
      cur = chars[r];
      counter = 1;
    }
  }
  return r;
};


function compress(chars){
    let indexRes = 0, index = 0;

    while(index < chars.length){
        let curr = chars[index];

        let count = 1;
        while ( index + 1 < chars.length && chars[index + 1] === curr){
            index++;
            count++;
        }

        chars[indexRes++] = curr;
        index++;
        if (count === 1) continue;
        let string = count.toString();

        for (let i = 0; i < string.length; i++){
            chars[indexRes++] = string[i];
        }
    }
    return indexRes;

}