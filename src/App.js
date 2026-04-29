import React, { useState } from 'react';
import './App.css';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aman", score: 78 },
    { id: 2, name: "Riya", score: 45 },
    { id: 3, name: "Karan", score: 90 },
    { id: 4, name: "Neha", score: 32 }
  ]);

  const [newName, setNewName] = useState('');
  const [newScore, setNewScore] = useState('');

  // Stats Calculations [cite: 13, 50, 51]
  const total = students.length;
  const passed = students.filter(s => s.score >= 40).length;
  const failed = total - passed;
  const avg = total > 0 ? Math.round(students.reduce((acc, s) => acc + s.score, 0) / total) : 0;

  const handleAdd = (e) => {
    e.preventDefault();
    if (newName && newScore) {
      setStudents([...students, { id: Date.now(), name: newName, score: parseInt(newScore) }]);
      setNewName(''); setNewScore('');
    }
  };

  const updateScore = (id, val) => {
    setStudents(students.map(s => s.id === id ? { ...s, score: parseInt(val) || 0 } : s));
  };

  return (
    <div className="container">
      <div className="header-banner">
        <h1>Student Scoreboard</h1>
      </div>

      <div className="enroll-section">
        <p style={{textAlign: 'center', fontSize: '0.8rem', color: '#94a3b8'}}>+ ENROLL NEW STUDENT</p>
        <form onSubmit={handleAdd} className="input-group">
          <input placeholder="Student Name" value={newName} onChange={e => setNewName(e.target.value)} />
          <input type="number" placeholder="Score (0-100)" value={newScore} onChange={e => setNewScore(e.target.value)} />
          <button className="add-btn" type="submit">Add Student</button>
        </form>
      </div>

      <div className="stats-container">
        <div className="stat-card"><h2>{total}</h2><p>Total</p></div>
        <div className="stat-card"><h2 style={{color: 'var(--pass-green)'}}>{passed}</h2><p>Passed</p></div>
        <div className="stat-card"><h2 style={{color: 'var(--fail-red)'}}>{failed}</h2><p>Failed</p></div>
        <div className="stat-card"><h2 style={{color: 'var(--primary-cyan)'}}>{avg}</h2><p>Avg Score</p></div>
      </div>

      <table>
        <thead>
          <tr><th>Name</th><th>Score</th><th>Status</th><th>Update</th></tr>
        </thead>
        <tbody>
          {students.map(s => (
            <tr key={s.id} className="student-row">
              <td style={{fontWeight: 'bold'}}>{s.name}</td>
              <td style={{color: 'var(--primary-cyan)', fontWeight: 'bold'}}>{s.score}</td>
              <td>
                <span className={`status-pill ${s.score >= 40 ? 'pass' : 'fail'}`}>
                  {s.score >= 40 ? '✓ PASS' : '✗ FAIL'}
                </span>
              </td>
              <td>
                <input 
                  type="number" 
                  value={s.score} 
                  onChange={e => updateScore(s.id, e.target.value)}
                  style={{width: '60px', marginRight: '10px'}}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;