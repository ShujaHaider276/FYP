import React, { useState } from 'react';
import SideBAR from '../SideBAR';
import { useNavigate } from 'react-router-dom';
import Modifystu from './ModifyStu';
import "./DeleteStudents.css"

const ModifyStudent = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([
    { id: 1, name: 'Ali Ismail' },
    { id: 2, name: 'Muneeb Baig aka (BACKEND)' },
    { id: 3, name: 'Hafiz Awais aka (HAFIZ SUSTI)' },
  ]);

  const handleModifyStu = () =>{
    navigate('/Students/ModifyStu');
  };

  return (
    <div>
      <SideBAR>
        <div className='user_h'>
          <h1>Students Management</h1>
          <div className='user_Management'>
            <h2>List of Students</h2>
            <ul className='users'>
              {students.map((students) => (
                <li key={students.id}>
                  {students.name}{' '}
                  <button id='del_btn' onClick={handleModifyStu}>Modify</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SideBAR>
    </div>
  );
};

export default ModifyStudent;


