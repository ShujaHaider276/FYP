// import React, { useState } from 'react';
// import SideBAR from '../SideBAR';
// import "./DeleteStudents.css"

// const DeleteStudent = () => {
//   const [students, setStudents] = useState([
//     { id: 1, name: 'Ali Ismail' },
//     { id: 2, name: 'Muneeb Baig aka (BACKEND)' },
//     { id: 3, name: 'Hafiz Awais aka (HAFIZ SUSTI)' },
//   ]);

//   const handleDeleteStudents = (studentId) => {
//     const updatedStudents = students.filter((students) => students.id !== studentId);
//     setStudents(updatedStudents);
//   };


//   return (
//     <div>
//       <SideBAR>
//         <div className='user_h'>
//           <h1>Students Management</h1>
//           <div className='user_Management'>
//             <h2>List of Students</h2>
//             <ul className='users'>
//               {students.map((students) => (
//                 <li key={students.id}>
//                   {students.name}{' '}
//                   <button id='del_btn' onClick={() => handleDeleteStudents(students.id)}>Delete</button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </SideBAR>
//     </div>
//   );
// };

// export default DeleteStudent;


// import React, { useState } from 'react';
// import SideBAR from '../SideBAR';
// import { useNavigate } from 'react-router-dom';
// import Modifystu from './ModifyStu';
// import "./DeleteStudents.css"

// const ModifyStudent = () => {
//   const navigate = useNavigate();
//   const [students, setStudents] = useState([
//     { id: 1, name: 'Ali Ismail' },
//     { id: 2, name: 'Muneeb Baig aka (BACKEND)' },
//     { id: 3, name: 'Hafiz Awais aka (HAFIZ SUSTI)' },
//   ]);

//   const handleModifyStu = () =>{
//     navigate('/Students/ModifyStu');
//   };

//   return (
//     <div>
//       <SideBAR>
//         <div className='user_h'>
//           <h1>Students Management</h1>
//           <div className='user_Management'>
//             <h2>List of Students</h2>
//             <ul className='users'>
//               {students.map((students) => (
//                 <li key={students.id}>
//                   {students.name}{' '}
//                   <button id='del_btn' onClick={handleModifyStu}>Modify</button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </SideBAR>
//     </div>
//   );
// };

// export default ModifyStudent;


import React, { useState } from 'react'
import SideBAR from '../SideBAR'
import "../../index.css";
import { useNavigate } from 'react-router-dom';

const DeleteStudent = () => {
  const navigate = useNavigate();
  const handleClickfor1=()=>{
    console.log("Clicked 1st Year");
    navigate('/Students/DeleteFirst')
    // console.log(navigate);
  };

  const handleClickfor2=()=>{
    console.log("Clicked 2nd Year");
    navigate('/Students/DeleteSecond')
    // console.log(navigate);
  };

  const handleClickfor3=()=>{
    console.log("Clicked 3rd Year");
    navigate('/Students/DeleteThird')
    // console.log(navigate);
  };
  return (
    <div>
      <SideBAR>
        <h1>Delete Students</h1>
        <div className='VA_main'>
          <div className='classes' id='first_year' onClick={handleClickfor1}>1st Year</div>
          <div className='classes' id='second_year' onClick={handleClickfor2}>2nd Year</div>
          <div className='classes' id='third_year' onClick={handleClickfor3}>3rd Year</div>
        </div>
      </SideBAR>
    </div>
  )
}

export default DeleteStudent;



