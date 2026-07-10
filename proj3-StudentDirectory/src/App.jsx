import './App.css'
import { useState } from 'react'
import StudentCard from './StudentCard'

function App() {
  
  const [darkmode, setDarkmode] = useState(false);

  const toggleDarkmode = () => setDarkmode(!darkmode);

  const Students = [
    {
      id: 1,
      name: "Akshat Tomar",
      age: 21,
      branch: "CSE",
      year: "4th Year",
      grade: "A"
    },
    {
      id: 2,
      name: "Daksh Singh",
      age: 20,
      branch: "AI",
      year: "1st Year",
      grade: "A"
    },
    {
      id: 3,
      name: "Rohan Kumar",
      age: 23,
      branch: "AI",
      year: "3rd Year",
      grade: "B"
    },
    {
      id: 4,
      name: "Jatin Jain",
      age: 22,
      branch: "CSE",
      year: "4th Year",
      grade: "A"
    },
    {
      id: 5,
      name: "Harish Sharma",
      age: 20,
      branch: "CSE",
      year: "2nd Year",
      grade: "B"
    }
  ]

  return (
    <div className={`min-h-screen flex items-center justify-center p-10 ${darkmode ? "bg-gray-800" : "bg-blue-100"}`}>
      <div className="absolute top-5 right-5">
        <button onClick={toggleDarkmode} className="px-4 py-2 bg-blue-500 text-white rounded">
          {darkmode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <div className="grid grid-cols-3 gap-5 max-w-5xl w-full">
        {Students.map((student, i) => <StudentCard key={i} {...student} />)}
      </div>
    </div>
  )
}

export default App
