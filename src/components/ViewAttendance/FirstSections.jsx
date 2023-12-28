// components/ViewAttendance/FirstSections.js
import React from 'react';
import SideBAR from '../SideBAR';
import "../../index.css";

const FirstSections = () => {
  return (
    <div>
      <SideBAR>
        <h1>ViewAttendence</h1>
        <div className='VA_main'>
          <div className='classes' id='sectionA'>Section A</div>
          <div className='classes' id='sectionB'>Section B</div>
        </div>
      </SideBAR>
    </div>
  )
}

export default FirstSections;

