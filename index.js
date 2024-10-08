const students = [
  { name: "Alice", age: 20, grade: 85 },
  { name: "Bob", age: 22, grade: 90 },
  { name: "Charlie", age: 21, grade: 78 },
  { name: "Diana", age: 23, grade: 95 },
];
students.forEach((student) => console.log(student.name, student.grade));

const topStudents = students.filter(
  (student) => (student.name, student.grade > 80)
);
console.log(topStudents);

const youngStudents = students.filter((student) => student.age <= 21);
console.log(youngStudents);

const prodigies = students.filter(
  (student) => student.age <= 21 && student.grade > 80
);
console.log(prodigies);
