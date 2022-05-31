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