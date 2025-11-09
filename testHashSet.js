import { HashSet } from "./hashSet.js";
const set = new HashSet();

set.add("apple");
set.add("banana");
set.add("apple"); // ignored, no duplicates

console.log(set.has("apple")); // true
console.log(set.has("carrot")); // false

set.remove("banana");
console.log(set.keys()); // ["apple"]
