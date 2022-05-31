function findMaxNumber(num1, num2){
    // long syntax
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