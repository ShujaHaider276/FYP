import React from 'react'
import SideBAR from '../SideBAR'
import "../../index.css";
import { useNavigate } from 'react-router-dom';

const ViewAttendence = () => {
  const navigate = useNavigate();
  const handleClickfor1A=()=>{
    console.log("Clicked 1st Year");
    navigate('/ViewAttendence/FirstSections')
  };
  return (
    <div>
      <SideBAR>
        <h1>ViewAttendence</h1>
        <div className='VA_main'>
          <div className='classes' id='first_year' onClick={handleClickfor1A}>1st Year</div>
          <div className='classes' id='second_year'>2nd Year</div>
          <div className='classes' id='third_year'>3rd Year</div>
        </div>
      </SideBAR>
    </div>
  )
}

export default ViewAttendence;


