# `05` Show prime numbers

Write a function which show or print Prime Number upto provided range

- Prime Numbers are those numbers whose factors are only `1` and `the number itself`
- In simple language Prime Numbers are divisible by only `1` and `the number itself`
- Prime Numbers have only two factors: `1` and `the number itself`
- Example: 2, 3, 5, 7, 11, 13, 17, 19 and so on...

```js
  function showPrimeNumbers(numberLimit) {
  for (let curNum = 2; curNum <= numberLimit; curNum++) {
    let isPrime = true;
    for (let factor = 2; factor < curNum; factor++) {
      if (curNum % factor === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log('Prime Number', curNum);  
    }
  }
} 
console.log(showPrimeNumbers(20)); 
```