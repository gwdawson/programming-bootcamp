const removePersonWithID = (tutors, id) => {
  if (tutors.length === 0) return [];
  const newTutors = tutors.filter((tutor) => {
    if (tutor.id !== id) {
      return tutor;
    }
  });
  return newTutors;
};

const raiseSalaries = (employees, raise) => {
  if (employees.length === 0) return [];
  const newSalaries = employees.map((employee) => {
    const employeeCopy = { ...employee };
    const newPay = employee.salary + employee.salary / raise;
    employeeCopy.salary = newPay;
    return employeeCopy;
  });
  return newSalaries;
};

module.exports = { removePersonWithID, raiseSalaries };
