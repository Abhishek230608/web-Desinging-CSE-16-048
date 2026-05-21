import "./index.css";

function Header(props) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
      <hr />
    </div>
  );
}

function StudentCard(props) {
  return (
    <div className="student-card">

      <h2>{props.name}</h2>

      <p>
        <strong>Course:</strong> {props.course}
      </p>

      <p>
        <strong>Marks:</strong> {props.marks}
      </p>

    </div>
  );
}

function App() {
  return (
    <div className="container">

      <Header title="📋 Student App" />

      <StudentCard
        name="Abhishek Pandey"
        course="ECE"
        marks={89}
      />

      <StudentCard
        name="Rahul Sharma"
        course="CSE"
        marks={92}
      />

      <StudentCard
        name="Priya Singh"
        course="IT"
        marks={85}
      />

    </div>
  );
}

export default App;