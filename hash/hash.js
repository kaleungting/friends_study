class HashTable {
  constructor(size = 5) {
    this.keyMap = new Array(size);
  }

  hash(key) {
    let total = 0;
    let weirdPrime = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * weirdPrime + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let hashed = this.hash(key);
    if (!this.keyMap[hashed]) {
      this.keyMap[hashed] = [];
    }
    this.keyMap[hashed].push([key, value]);
  }

  get(key) {
    let hashed = this.hash(key);
    let results = this.keyMap[hashed];
    if (this.keyMap[results]) {
      for (let i = 0; i < results.length; i++) {
        if (results[i][0] === key) {
          return results[i];
        }
      }
    }
    return undefined;
  }

  keys() {
    let results = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i] !== undefined) {
        if (this.keyMap[i].length === 1) {
          results.push(this.keyMap[i][0][0]);
        } else {
          for (let j = 0; j < this.keyMap[i].length; j++) {
            results.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return results;
  }

  values() {
    let results = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i] !== undefined) {
        if (this.keyMap[i].length === 1) {
          results.push(this.keyMap[i][0][1]);
        } else {
          for (let j = 0; j < this.keyMap[i].length; j++) {
            results.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return results;
  }
}

const hashTable = new HashTable();

hashTable.set("salmon", 4);
hashTable.set("tuna", 3);
hashTable.set("shrimp", 2);
hashTable.set("beef", 4);
console.log(hashTable.keys());
console.log(hashTable.values());
// console.log(hashTable.get("shrimp"));
