import { useEffect, useState } from 'react';
import './App.css';

function Header() {
  return <h1 className="page-title">Student Management System</h1>;
}

function StudentProfile({ name, department, year, practiceCount }) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `Practice Sessions: ${practiceCount}`;

    return () => {
      document.title = previousTitle;
    };
  }, [practiceCount]);

  return (
    <div className="student-profile">
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Department:</strong> {department}</p>
      <p><strong>Year:</strong> {year}</p>
      <p><strong>Practice Sessions Completed:</strong> {practiceCount}</p>
    </div>
  );
}

function Footer() {
  return <footer>© 2026 Student Management System</footer>;
}

function App() {
  const [practiceCount, setPracticeCount] = useState(0);
  const [isProfileVisible, setIsProfileVisible] = useState(true);

  const student = {
    name: 'Anu',
    department: 'CSE',
    year: '3rd Year',
  };

  return (
    <div className="app">
      <Header />

      <button onClick={() => setIsProfileVisible(!isProfileVisible)}>
        {isProfileVisible ? 'Hide Profile' : 'Show Profile'}
      </button>

      {isProfileVisible && (
        <>
          <StudentProfile
            name={student.name}
            department={student.department}
            year={student.year}
            practiceCount={practiceCount}
          />

          <button onClick={() => setPracticeCount(practiceCount + 1)}>
            Complete Practice
          </button>
          <button onClick={() => setPracticeCount(0)}>
            Reset
          </button>
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;