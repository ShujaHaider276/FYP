import React, { useState } from 'react';
import SideBAR from '../SideBAR';
import "../Users/DeleteUser.css";

const DeleteSecondA = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'Ali Ismail' },
    { id: 2, name: 'Muneeb Baig aka (BACKEND)' },
    { id: 3, name: 'Hafiz Awais aka (HAFIZ SUSTI)' },
  ]);

  const handleDeleteStudents = (studentId) => {
    const updatedStudents = students.filter((students) => students.id !== studentId);
    setStudents(updatedStudents);
  };


  return (
    <div>
      <SideBAR>
        <div className='user_h'>
          <h1>Students Management</h1>
          <div className='user_Management'>
            <h2>List of 2nd Year A Students</h2>
            <ul className='users'>
              {students.map((students) => (
                <li key={students.id}>
                  {students.name}{' '}
                  <button id='del_btn' className='button' onClick={() => handleDeleteStudents(students.id)}>Delete</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SideBAR>
    </div>
  );
};

export default DeleteSecondA;