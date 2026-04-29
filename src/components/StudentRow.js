import React from 'react';

const StudentRow = ({ student, onUpdateScore }) => {
  // Pass/Fail Logic: score >= 40 
  const isPassing = student.score >= 40;

  return (
    <tr>
      <td>{student.name}</td>
      <td>
        <input 
          type="number" 
          value={student.score} 
          onChange={(e) => onUpdateScore(student.id, e.target.value)} 
        />
      </td>
      <td className={isPassing ? "pass" : "fail"}>
        {isPassing ? "Pass" : "Fail"} {/* [cite: 53] */}
      </td>
    </tr>
  );
};

export default StudentRow;