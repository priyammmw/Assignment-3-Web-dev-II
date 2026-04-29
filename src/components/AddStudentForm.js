import React, { useState } from 'react';

const AddStudentForm = ({ onAddStudent }) => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && score !== '') {
      onAddStudent(name, parseInt(score));
      setName(''); // Clear form after submission [cite: 46]
      setScore('');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Student Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <input 
        type="number" 
        placeholder="Score" 
        value={score} 
        onChange={(e) => setScore(e.target.value)} 
        required 
      />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudentForm;