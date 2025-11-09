export class HashSet {
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

  add(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    // check if key already exists
    for (const k of bucket) {
      if (k === key) return; // already present
    }

    bucket.push(key);
    this.size++;

    if (this.size / this.capacity >= this.loadFactor) {
      this.resize();
    }
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];

    const i = bucket.indexOf(key);
    if (i !== -1) {
      bucket.splice(i, 1);
      this.size--;
      return true;
    }
    return false;
  }

  has(key) {
    const index = this.hash(key);
    const bucket = this.buckets[index];
    return bucket.includes(key);
  }

  clear() {
    this.size = 0;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
  }

  keys() {
    const allKeys = [];
    for (const bucket of this.buckets) {
      allKeys.push(...bucket);
    }
    return allKeys;
  }

  resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.size = 0;

    for (const bucket of oldBuckets) {
      for (const key of bucket) {
        this.add(key); // re-add keys to new buckets
      }
    }
  }
}
