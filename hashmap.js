export class HashMap {
  constructor(loadFactor = 0.75, initialCapacity = 16) {
    this.loadFactor = loadFactor;
    this.capacity = initialCapacity;
    this.size = 0;
    this.buckets = new Array(initialCapacity).fill(null).map(() => []);
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value;
        return;
      }
    }

    bucket.push([key, value]);
    this.size++;
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }

    return null;
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return true;
      }
    }

    return false;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }

    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.size = 0;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
  }

  keys() {
    const allKeys = [];

    for (const bucket of this.buckets) {
      for (const pair of bucket) {
        allKeys.push(pair[0]); // first element is the key
      }
    }

    return allKeys;
  }

  values() {
    const allValues = [];

    for (const bucket of this.buckets) {
      for (const pair of bucket) {
        allValues.push(pair[1]); // first element is the key
      }
    }

    return allValues;
  }
}
