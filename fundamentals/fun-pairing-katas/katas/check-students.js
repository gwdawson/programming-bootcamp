/*
  The function checkStudents should take a list of students and a cohort and return true if all students are in the given cohort and false if any students are not in the given cohort.
  E.g. checkStudents([
    {name: 'Ben', cohort: 'October'},
    {name: 'Amanda', cohort: 'April'},
    {name: 'Matt', cohort: 'April'}
  ], 'April')
  --> false
*/

function checkStudents(students, month) {
  if (students.length < 1) return false;
  for (const student in students) {
    if (students[student].cohort !== month) {
      return false;
    }
    return true;
  }
}

module.exports = checkStudents;
