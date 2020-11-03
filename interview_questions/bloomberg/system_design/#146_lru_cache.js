class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  get(key) {
    if (this.cache.has(key)) {
        //want to keep the value
      let v = this.cache.get(key);
        //delete the key, because you're going to reset it (aka add it to the back)
      this.cache.delete(key);
        //add the key to the end of the cache
      this.cache.set(key, v);
        //return the value of the key
      return this.cache.get(key);
    } else {
      return -1;
    }
  }

  put(key, value) {
        //if key exists, delete it because we'll want to replace it
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
        //set the key, value pair to the cache
    this.cache.set(key, value);
        //if the LRU cache is at capacity, delete the first key/value pair in the cache
    if (this.cache.size > this.capacity) {
        //keys().next().value yields the FIRST key in the map
      this.cache.delete(this.cache.keys().next().value);
    }
  }
}

/*
pseudocode

use a map to set key value pairs
always delete the key/value pair after you "GET" it, and then just re-add to the set, so that recently used will be in the back of the map
you can access the first key of a map by using this trick .keys().next().value

Time Complexity - O(1) Because we're using Map, we can access key/value pairs in constant time
Space Complexity - O(N) N represents the capacity of the LRU Cache

*/