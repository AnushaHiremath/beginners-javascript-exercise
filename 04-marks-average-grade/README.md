# `04` Marks average grade

Write a function which Calculate the sum of marks provided in an array, average it and also show Grade

## 📝 Instructions

Grade criteria/mechanism is given below:

- 0% to 70%    => D Grade
- 71% to 79%   => C Grade
- 81% to 89%   => B Grade
- 91% to 100%  => A Grade

```js
const MARKSARRAY = [55, 85, 55, 65];
function calculateAverageGrade(currentMarks) {
  let totalMarks = 0;
  let averageMarks = 0;
  let grade;
  for(let mark of currentMarks) {
    totalMarks += mark;
  }
  
  averageMarks = (totalMarks/currentMarks.length);
  
  if(averageMarks < 70) return grade = 'D'; 
  if(averageMarks < 80) return grade = 'C';
  if(averageMarks < 90) return grade = 'B';
  if(averageMarks <= 100) return grade = 'A';
}
console.log('Grade:', calculateAverageGrade(MARKSARRAY)); 
``` 
