import React from 'react';
import './employeedetails.css';

const EmployeeDetailsPage = ({ employee, onClose }) => {
  return (
    <div className="employee-details">
      <button onClick={onClose} className="close-button">Close</button>
      <h2>{employee.name}</h2>
      <img src={employee.avatar} alt={employee.name} className="employee-avatar-large" />
   
    </div>
  );
};

export default EmployeeDetailsPage;
