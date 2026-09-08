import Footer from "./Footer";

const App = () => {
  // 1. String
  const name = "Atul Demond";

  // 2. Number
  const age = 21;

  // 3. Boolean
  const isStudent = true;

  // 4. Object
  const student = {
    name: "Atul Demond",
    age: 21,
    city: "Sasaram",
  };

  // 5. Array
  const subjects = ["JavaScript", "React", "Node.js", "MongoDB"];

  // 6. Array of Objects
  const students = [
    {
      name: "Atul",
      age: 21,
    },
    {
      name: "Sumit",
      age: 23,
    },
    {
      name: "Amit",
      age: 22,
    },
  ];

  // 7. Function
  const handleClick = () => {
    console.log("Button clicked from Footer");
  };

  // 8. Function which receives data
  const handleStudent = (studentName) => {
    console.log("Selected student:", studentName);
  };

  return (
    <div>
      <h1>App Component</h1>

      <Footer
        name={name}
        age={age}
        isStudent={isStudent}
        student={student}
        subjects={subjects}
        students={students}
        onClick={handleClick}
        onStudentClick={handleStudent}
      >
        {/* 9. children */}
        <h3>This is Children JSX</h3>
        <p>Hello from App Component</p>
      </Footer>
    </div>
  );
};

export default App;
