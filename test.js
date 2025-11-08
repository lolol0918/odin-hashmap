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

console.log("Before remove:");
console.log("Has 'apple'? ", test.has("apple")); // true
console.log("Has 'lion'? ", test.has("lion")); // true

// Remove some keys
console.log("\nRemoving 'apple':", test.remove("apple")); // true
console.log("Removing 'lion':", test.remove("lion")); // true
console.log("Removing 'monkey':", test.remove("monkey")); // false

console.log("\nAfter remove:");
console.log("Has 'apple'? ", test.has("apple")); // false
console.log("Has 'lion'? ", test.has("lion")); // false
console.log("Has 'banana'? ", test.has("banana")); // true
console.log("Get 'banana': ", test.get("banana")); // "yellow"

console.log(test.lenght());

test.remove("frog");
console.log(test.lenght());
