import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../Users/DeleteUser.css";
import SideBAR from '../SideBAR';

const ModifyThirdB = () => {
    const navigate = useNavigate();
    const handleClickforModifyStudent = () => {
        console.log("MonthlyAttendance");
        navigate('/Students/ModifyStu')
    };

    const [students, setStudents] = useState([
        { id: 1, name: 'Ali Ismail' },
        { id: 2, name: 'Muneeb Baig aka (BACKEND)' },
        { id: 3, name: 'Hafiz Awais aka (HAFIZ SUSTI)' },
    ]);

    return (
        <div>
            <SideBAR>
                <div className='user_h'>
                    <h1>3rd YEAR</h1>
                    <div className='user_Management'>
                        <h2>SECTION A</h2>
                        <ul className='users'>
                            {students.map((students) => (
                                <li key={students.id}>
                                    {students.name}{' '}
                                    <label>
                                        <button id='btnA1' className='button' onClick={handleClickforModifyStudent}>Modify Student</button>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </SideBAR>
        </div>
    );
}

export default ModifyThirdB;

