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

console.log(test.entries());
console.log(test.keys());
console.log(test.values());
console.log("Before clear:");
console.log("Length:", test.length()); // 12
console.log("Has 'apple'? ", test.has("apple")); // true
console.log("Has 'lion'? ", test.has("lion")); // true
console.log("Has 'kite'? ", test.has("kite")); // true

// Clear the hash map
test.clear();

console.log("\nAfter clear:");
console.log("Length:", test.length()); // 0
console.log("Has 'apple'? ", test.has("apple")); // false
console.log("Has 'lion'? ", test.has("lion")); // false
console.log("Has 'kite'? ", test.has("kite")); // false

// Add something new after clearing
test.set("monkey", "brown");
console.log("\nAfter adding new key:");
console.log("Length:", test.length()); // 1
console.log("Get 'monkey':", test.get("monkey")); // "brown"
