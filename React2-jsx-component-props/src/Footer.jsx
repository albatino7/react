const Footer = ({
  name,
  age,
  isStudent,
  student,
  subjects,
  students,
  onClick,
  onStudentClick,
  children,
}) => {
  return (
    <div>
      <h1>Footer Component</h1>

      {/* 1. String */}
      <h3>Name: {name}</h3>

      {/* 2. Number */}
      <h3>Age: {age}</h3>

      {/* 3. Boolean */}
      <h3>Student: {isStudent ? "Yes" : "No"}</h3>

      {/* 4. Object */}
      <h2>Student Object</h2>

      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>City: {student.city}</p>

      {/* 5. Array */}
      <h2>Subjects</h2>

      {subjects.map((subject, index) => (
        <p key={index}>{subject}</p>
      ))}

      {/* 6. Array of Objects */}
      <h2>All Students</h2>

      {students.map((student) => (
        <div key={student.name}>
          <p>Name: {student.name}</p>

          <p>Age: {student.age}</p>
        </div>
      ))}

      {/* 7. Function prop */}
      <button onClick={onClick}>Click Me</button>

      {/* 8. Function with data */}
      <h2>Student Buttons</h2>

      <button onClick={() => onStudentClick("Atul")}>Atul</button>

      <button onClick={() => onStudentClick("Sumit")}>Sumit</button>

      <button onClick={() => onStudentClick("Amit")}>Amit</button>

      {/* 9. Children */}
      <h2>Children</h2>

      {children}
    </div>
  );
};

export default Footer;
