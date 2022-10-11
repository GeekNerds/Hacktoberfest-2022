## Closures in JavaScript

A closure is **the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment)**. In other words, a closure gives you access to an outer function's scope from an inner function.

#### Code Example

```
function makeFunc() {
  const name = 'Mozilla';
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();
```
