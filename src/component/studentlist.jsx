
import React from "react";

function StudentList({ students, onDelete }) {
  return (
    <div className="space-y-3">
      {students.length === 0 ? (
        <p className="text-center text-gray-500 py-6">
          No students found.
        </p>
      ) : (
        students.map((student) => (
          <div
            key={student.id}
            className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
          >
            <div>
              <h3 className="font-semibold text-gray-800">
                {student.name}
              </h3>
              <p className="text-sm text-gray-500">
                ID: {student.id} | {student.course}
              </p>
            </div>

            <button
              onClick={() => onDelete(student.id)}
              className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default StudentList;
