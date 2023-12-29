// components/ViewAttendance/FirstSections.js
import React from 'react';
import SideBAR from '../SideBAR';
import "../../index.css";
import { useNavigate } from 'react-router-dom';


const DeleteSecond = () => {
  const navigate = useNavigate();
  const handleClickforA=()=>{
    console.log("Clicked Sec A");
    navigate('/Students/DeleteThird/DeleteThirdA')
    // console.log(navigate);
  };

  const handleClickforB=()=>{
    console.log("Clicked Sec B");
    navigate('/Students/DeleteThird/DeleteThirdB')
    // console.log(navigate);
  };
  return (
    <div>
      <SideBAR>
        <h1>Delete Students</h1>
        <div className='VA_main'>
          <div className='classes' id='sectionA' onClick={handleClickforA}>Section A</div>
          <div className='classes' id='sectionB' onClick={handleClickforB}>Section B</div>
        </div>
      </SideBAR>
    </div>
  )
}

export default DeleteSecond;
