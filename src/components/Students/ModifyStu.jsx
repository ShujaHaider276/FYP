import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import SideBAR from '../SideBAR'
import "./AddStudent.css";

const Modifystu = () => {
  const [formData, setFormData] = useState({
    admissionNumber: '',
    rollNumber: '',
    studentname: '',
    joiningDate: '',
    email: '',
    cnic: '',
    department: '',
    studentClass: '',
    section: '',
    shift: '',
    studentmobilenumber: '',
    guardianname: '',
    fathernumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const ApiCaller = async (props) => {
    try {
      const response = await fetch('http://localhost:80/add-student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ props }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

    } catch (error) {
      console.error('Error calling API:', error.message);
    }
    console.log("hello")

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here using the formData
    ApiCaller(formData);

  };

  return (
    <div>
      <SideBAR>
        <div className="main_container">
          <div className="container mt-5 form-group">
            <h1 className="H">Student Modification Form</h1>
            <form className='form_container' onSubmit={handleSubmit}>

              <div className="mb-3">

                <label htmlFor="admissionNumber" className="form-label">
                  Admission Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="admissionNumber"
                  name="admissionNumber"
                  value={formData.admissionNumber}
                  onChange={handleInputChange}
                />

              </div>

              <div className="mb-3">
                <label htmlFor="rollNo" className="form-label">
                  Roll No
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="rollNumber"
                  name="rollNumber"
                  value={formData.rollNumber}
                  onChange={handleInputChange}
                />

              </div>


              <div className="mb-3">
                <label htmlFor="studentname" className="form-label">
                  Student Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="studentname"
                  name="studentname"
                  value={formData.studentname}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="studentmobilenumber" className="form-label">
                  Student Mobile Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="studentmobilenumber"
                  name="studentmobilenumber"
                  value={formData.studentmobilenumber}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="guardianname" className="form-label">
                  Father/Guardian Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="guardianname"
                  name="guardianname"
                  value={formData.guardianname}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="fathernumber" className="form-label">
                  Father/Guardian Mobile Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fathernumber"
                  name="fathernumber"
                  value={formData.fathernumber}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="joiningDate" className="form-label">
                  joiningDate
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="joiningDate"
                  name="joiningDate"
                  value={formData.joiningDate}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="cnic" className="form-label">
                  CNIC
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cnic"
                  name="cnic"
                  value={formData.cnic}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="department" className="form-label">
                  department
                </label>
                <select
                  className="form-select"
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Select department
                  </option>
                  <option value="ict">ICT</option>
                  <option value="mechanical">mechanical</option>
                  <option value="auto&diesel">Auto & Diesel</option>
                  <option value="civil">Civil</option>
                  <option value="qs">QS</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="studentClass" className="form-label">
                  Class
                </label>
                <select
                  className="form-select"
                  id="studentClass"
                  name="studentClass"
                  value={formData.studentClass}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Select Class
                  </option>
                  <option value="1st-year">1st-Year</option>
                  <option value="2nd-year">2nd-Year</option>
                  <option value="3rd-year">3rd-Year</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="section" className="form-label">
                  Section
                </label>
                <select
                  className="form-select"
                  id="section"
                  name="section"
                  value={formData.section}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Section
                  </option>
                  <option value="a">A</option>
                  <option value="b">B</option>

                </select>
              </div>






              <div className="mb-3">
                <label htmlFor="shift" className="form-label">
                  Shift
                </label>
                <select
                  className="form-select"
                  id="shift"
                  name="shift"
                  value={formData.shift}
                  onChange={handleInputChange}
                >
                  <option value="" disabled>
                    Select Shift
                  </option>
                  <option value="morning">Morning</option>
                  <option value="evening">Evening</option>
                </select>
              </div>

              <button id='btn' type="submit" className="btn btn-primary">
                Modify
              </button>
            </form>
          </div>
        </div>
      </SideBAR>

    </div>
  );
};

export default Modifystu;


