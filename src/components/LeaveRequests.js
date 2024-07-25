import React, { useState, useEffect } from 'react';
import './LeaveRequests.css'; 

const LeaveRequests = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API or backend
    const fetchedRequests = [
      { id: 1, employeeName: 'John Doe', leaveType: 'Sick Leave', startDate: '2024-07-01', endDate: '2024-07-05', reason: 'Flu' },
      { id: 2, employeeName: 'Jane Smith', leaveType: 'Annual Leave', startDate: '2024-07-10', endDate: '2024-07-20', reason: 'Vacation' },
      { id: 3, employeeName: 'Alice Johnson', leaveType: 'Casual Leave', startDate: '2024-07-15', endDate: '2024-07-16', reason: 'Personal' },
      { id: 4, employeeName: 'Bob Brown', leaveType: 'Sick Leave', startDate: '2024-07-18', endDate: '2024-07-20', reason: 'Back Pain' },
      { id: 5, employeeName: 'Chris Green', leaveType: 'Annual Leave', startDate: '2024-07-25', endDate: '2024-08-05', reason: 'Travel' },
    ];
    setLeaveRequests(fetchedRequests);
  }, []);

  const handleAccept = (id) => {
    console.log(`Leave request ${id} accepted`);
   
  };

  const handleReject = (id) => {
    console.log(`Leave request ${id} rejected`);
    
  };

  return (
    <div className="leave-requests-container">
      <h2>Leave Requests</h2>
      <ul className="leave-requests-list">
        {leaveRequests.map(request => (
          <li key={request.id} className="leave-request-item">
            <h3>{request.employeeName}</h3>
            <p>Leave Type: {request.leaveType}</p>
            <p>Start Date: {request.startDate}</p>
            <p>End Date: {request.endDate}</p>
            <p>Reason: {request.reason}</p>
            <div className="button-group1">
              <button className="accept-button" onClick={() => handleAccept(request.id)}>Accept</button>
              <button className="reject-button" onClick={() => handleReject(request.id)}>Reject</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeaveRequests;
