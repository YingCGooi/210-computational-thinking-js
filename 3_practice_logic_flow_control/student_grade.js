var numberOfScores = prompt('Enter the number of scores:');

var scoreCount = 1;
var scoreSum = 0;

while (scoreCount <= numberOfScores) {
  scoreInput = prompt('Enter score ' + String(scoreCount) + ':');

  scoreSum += Number(scoreInput);
  scoreCount += 1;
}

var averageScore = scoreSum / numberOfScores;
var grade;

if (averageScore >= 90) {
  grade = 'A';
} else if (averageScore >= 70) {
  grade = 'B';
} else if (averageScore >= 50) {
  grade = 'C';
} else {
  grade = 'F';
}

console.log('Based on the average of your ' + String(numberOfScores) + 
' scores your letter grade is "' + String(grade) + '".');