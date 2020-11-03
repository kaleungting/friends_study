// // MAKE IT WORK AND THEN MAKE IT WORK BETTER
// // -----------------------------------------------------
// // how does fill work?
// let bogas = new Array(22).fill(false);
let board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];

let visited = Array.from({ length: board.length }, () => {
  return Array.from({ length: board[0].length }, () => "X");
});

visited[1][1] = "0";
visited[1][2] = "0";
visited[2][3] = "0";
visited[2][2] = "0";

console.log(visited);

let betterVisited = board.map((row) => row.map((letter) => "X"));
betterVisited[1][1] = "0";
betterVisited[1][2] = "0";
betterVisited[2][3] = "0";
betterVisited[2][2] = "0";

console.log(betterVisited);

// ----------- splice(stard, deleteCount, ...,insert)
let months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// inserts 'Feb' at index 1, deletes zero from Index 1,
// expected output: Array ["Jan", "Feb", "March", "April", "June"]
months2 = ["Jan", "Feb", "March", "April", "June"];
months2.splice(1, 3);
// delets 3 items from Index 1,
// expected output: Array ["Jan", "June"]
months2.splice(1, 0, 2, 3, 4);
// inserts 1,2,3 at index 1, delets zero from Index 1,
// expected output: Array ["Jan", 2, 3, 4, "June"]
// remove June
months = months.filter((ele) => ele !== "April");
// // -----------------------------------------------------
// // --------- numbers as keys -------------------
// let romans = { 1: "I", 4: "IV" };
// // -----------------------------------------------------
// // --------- string repeat method -------------------
// let str = "xb00";
// let repeated = str.repeat(4);
// // -----------------------------------------------------
// // --------- generate random alphanumeric string -------
// random = Math.random().toString(36).substring(5);
// // -----------------------------------------------------
// // ---------------- generate a random upto but not including max ----------------
// function generateRandomNumber(min, max) {
//   return Math.floor(Math.random() * max);
// }
// // ---------------- generate a random (min, max) ----------------
// function generateRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }
// // inclusive of max
function generateRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
console.log(generateRandomNumber(13, 17));
// // -----------------------------------------------------
// // ---------------- monkey patching ----------------
// // monkey patching array
// Array.prototype.swap = function (idx1, idx2) {
//   [this[idx1], this[idx2]] = [this[idx2], this[idx1]];
//   return this;
// };
// // -----------------------------------------------------
// // -------------------- Array from a set ---------------------------------
// let set = new Set();
// let uniqNums = Array.from(set);
// // -----------------------------------------------------
// // only spreads one level deep, doesnt go deeper;
// // solve flatten array
arr = [].concat([1, 2, 3, [4, 4, [2, 0]]]);
arr = [].concat(...[1, 2, 3, [4, 4, [2, 0]]]);
// // -----------------------------------------------------
// // -----------------------------------------------------
// //------------- strings ------------------
// /*
//   Can we slice a string -> yes
//   Cant do arr.join(), do arr.join('') or else it uses a comma
// */
// //==================================
// /* ==================== Arrays =========================
//   - push()    => O(1)
//   - pop()     => O(1)
//   - shift()   => O(n)
//   - unshift() => O(n)
//   - concat()  => O(n + m)
//   - slice()   => O(n)
//   - splice()  => O(n)
//   - reverse() => O(n)
//   - sort()    => O(nlog(n))
//   - forEach() => O(n)
//   - some()    => O(n)
//   - every()   => O(n)
//   - map()     => O(n)
//   - filter()  => O(n)
//   - reduce()  => O(n)
//   - fill()    => O(n)
// */
// // =======================================================
// /* ===================== Strings =========================
//   - push()    => O(1)
//   - pop()     => O(1)
//   - shift()   => O(n)
//   - unshift() => O(n)
//   - concat()  => O(n + m)
//   - slice()   => O(n)
//   - splice()  => O(n)
//   - reverse() => O(n)
//   - sort()    => O(nlog(n))
//   - forEach() => O(n)
//   - some()    => O(n)
//   - every()   => O(n)
//   - map()     => O(n)
//   - filter()  => O(n)
//   - reduce()  => O(n)
//   - fill()    => O(n)
// */
// // =======================================================
/* ==================== Objects =========================
  if (key in myObj);
  delete myObj.key
  myObj.forEach( key => )
  for(let key in myObj)
  if (key in myObj)  ||vs||  if (myObj.hasOwnProperty(key))
  -can an Obj key be a number?
      when we try to set numbers as obj keys they are converted into trings
  Objects.entries(myObj) => [[key1, val1], [key2, val2], ...]
  myObj.hasOwnProperty(key) => boolean

  
  */
 this.cache.delete(this.cache.keys().next().value); // ----> this trick deletes the FIRST entry in the object;
 


// // =======================================================
// /* ================== Strings vs ints ====================
//   6 + '22' => '622'
//   6 + '22' => '622'
//   num.toString(3) => base 3;
//   let bNum = 77777888
//   console.log('love:', bNum.toString(23));
//   all other operations return int
//   6 - '22' => -16;
//   '8' % 3 => 2
//   8 % '3' => 2
//   parseInt(str)
// */
// //=========================================================
// /* ============= Standard built-in objects ================
//   const parsed = parseInt(x, base)
//   const fromBase16 = parseInt('0xF', 16)
//   const fromBase10 = parseInt('18', 10) || parseInt('18')
//   parseInt(str)
// */
// //=========================================================
// /* ================== Sets ====================
//   - add()     => O(1)
//   - has()     => O(1)
//   - delete()  => O(1)
//   - forEach() => O(n)
//   - let arrFromSet = Array.from(set)
//   - set.forEach(ele => console.log(ele *10))
// */
// //=========================================================

/*
Quick way of creating a counter

let count = {};
for (let char of str) {
  count[char] = (count[char] || 0) + 1;
}
*/
