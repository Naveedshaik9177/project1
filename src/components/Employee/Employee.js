import React, { useState } from 'react';
import './Employee.css';
import NavBar from '../Navbar';
import SideBar from '../sidebar';
import AddEmployee from './leave.js'; 
import SalaryReport from '../SalaryReport.js'; 
// import LeaveRequests from '../LeaveRequests.js'; 
import ImageSlider from '../ImageSlider.js';

const Employee = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleButtonClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  return (
    <main>
      <NavBar />
      <ImageSlider/>
      <div className="employee-page">
        <SideBar onButtonClick={handleButtonClick} />
        <div className="employee-content">
          <div className={`employee-component ${selectedComponent === 'addEmployee' ? 'employee-slide employee-slide-in' : 'employee-slide'}`}>
            {selectedComponent === 'addEmployee' && <AddEmployee />}
          </div>
          {/* <div className={`employee-component ${selectedComponent === 'viewLeaveRequest' ? 'employee-slide employee-slide-in' : 'employee-slide'}`}>
            {selectedComponent === 'viewLeaveRequest' && <LeaveRequests/>}
          </div> */}
          <div className={`employee-component ${selectedComponent === 'salaryReports' ? 'employee-slide employee-slide-in' : 'employee-slide'}`}>
            {selectedComponent === 'salaryReports' && <SalaryReport/>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employee;
