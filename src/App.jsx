
import React, { useState } from "react";
import StudentList from "./component/studentlist";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul Patel", course: "BCA" },
    { id: 2, name: "Priya Shah", course: "BBA" },
    { id: 3, name: "Amit Kumar", course: "BCA" },
    { id: 4, name: "Neha Joshi", course: "MCA" },
  ]);

  const handleDelete = (id) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-blue-700">
            Student Management
          </h1>
          <p className="mt-2 text-gray-600">
            Manage your student records
          </p>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-lg">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">
              Student List
            </h2>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
              Total: {students.length}
            </span>
          </div>

          <StudentList
            students={students}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
