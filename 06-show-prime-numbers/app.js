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