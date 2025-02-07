// 1. We are managing a data structure of students -  representing a student with 'firstName' and 'age' properties.
// 2. The 'updateStudentAge' function is supposed to update the age of a student his/her first name
// 3. However, some students have the same first name !
// 4. To fix this bug, we want to add 2 properties : lastName and batch  (given a firstName + lastName + batch we do not expect duplication)

// TODO:
// - Update the data strucure and the functions to manage those new properties
const STUDENTS_DATA = [
  { firstName: "An", lastName: "Nguy", batch: "2028", age: 20 },
  { firstName: "Bình", lastName: "Tan", batch: "2021", age: 22 },
  { firstName: "Cẩm", lastName: "Li", batch: "2021", age: 21 },
  { firstName: "An", lastName: "Vi", batch: "2029", age: 19 }, // Duplicate first name !
];

/**
 * Update 1 student age, given his/her first name
 * @param {string} firstName - the student first name
 * @param {age} newAge  - the student new age
 */
function updateStudentAge(firstName, lastName, batch, newAge) {
  const studentIndex = STUDENTS_DATA.findIndex(
    (s) =>
      s.firstName === firstName && s.lastName === lastName && s.batch === batch
  );
  if (studentIndex !== -1) {
    STUDENTS_DATA[studentIndex].age = newAge;
  }
}

// 1 - Update An age to 30
updateStudentAge("An", "Vi", "2029", 30);
// 2 - Print the updated data
console.log(JSON.stringify(STUDENTS_DATA));
