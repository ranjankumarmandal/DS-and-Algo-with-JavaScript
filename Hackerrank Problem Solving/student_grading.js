/*
gradingStudents(73) // output : 75
gradingStudents(77) // output : 77
gradingStudents(38) // output : 40
gradingStudents(33) // ouput : 33
*/
function gradingStudents(grades) {
  // Write your code here
  // return final grade

  // Declare a result array
  // Loop over grades
  // declare a variable value and intialize to 0
  // check if original grade < 38, then store original grade in value only
  // let result1 = original grade + 1 and result2 = og + 2
  // check if result1 or else if result2 is divisible by 5, if yes, store grade in value
  // else store grade in value
  // push the value
  // return result

  return grades.map(function (grade) {
    return grade >= 38 && grade % 5 >= 3 ? grade + 5 - (grade % 5) : grade;
  });
}
