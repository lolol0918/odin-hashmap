import { HashMap } from "./hashmap.js";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

// remove an existing key
console.log(test.remove("dog")); // expected: true
console.log(test.get("dog")); // expected: undefined

// remove another existing key
console.log(test.remove("grape")); // expected: true
console.log(test.get("grape")); // expected: undefined

// remove a key that doesn't exist
console.log(test.remove("pizza")); // expected: false

// check size after removals
console.log(test.size);
