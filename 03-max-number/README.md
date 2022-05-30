# `03` Max number
Write a function which returns the maximum of two number

## 📝 Instructions:
1. Create a new function named findMaxNumber which accepts two numbers. The function should return the larger of the two numbers. 
2. You'll need to use a conditional statement to test the two numbers to see which is the larger of the two.

```js
function findMaxNumber(num1, num2){
  long syntax
   if(num1 > num2){
    return num1
  } else {
    return num2
  }  
}

let checkMax1 = findMaxNumber(10, 5);
console.log('Max Number:',checkMax1);

let checkMax2 = findMaxNumber(10, 15);
console.log('Max Number:',checkMax2);

let checkMax3 = findMaxNumber(100, 100);
console.log('Max Number:',checkMax3);
```