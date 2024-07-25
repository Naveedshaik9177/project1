import React, { useState } from 'react';
import './LeaveApplication.css';

const LeaveApplication = () => {
  const [leaveData, setLeaveData] = useState([]);
  const [formData, setFormData] = useState({
    leaveFromDate: '',
    leaveToDate: '',
    leaveType: '',
    reason: '',
    attachment: null,
  });

  const [remainingLeaves, setRemainingLeaves] = useState({
    sick: 10,
    casual: 10,
  });

  const totalLeaves = {
    sick: 10,
    casual: 10,
  };

  const [showMore, setShowMore] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, attachment: e.target.files[0] });
  };

  const calculateLeaveDays = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const differenceInTime = end.getTime() - start.getTime();
    return Math.ceil(differenceInTime / (1000 * 3600 * 24)) + 1; // +1 to include the end date
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const leaveDays = calculateLeaveDays(formData.leaveFromDate, formData.leaveToDate);

    if (leaveDays <= 0) {
      alert("Invalid leave period");
      return;
    }

    setLeaveData([...leaveData, { ...formData, leaveDays }]);

    // Update remaining leaves logic based on the number of days
    if (formData.leaveType === 'sick') {
      setRemainingLeaves((prevLeaves) => ({
        ...prevLeaves,
        sick: prevLeaves.sick - leaveDays,
      }));
    } else if (formData.leaveType === 'casual') {
      setRemainingLeaves((prevLeaves) => ({
        ...prevLeaves,
        casual: prevLeaves.casual - leaveDays,
      }));
    }

    setFormData({
      leaveFromDate: '',
      leaveToDate: '',
      leaveType: '',
      reason: '',
      attachment: null,
    });
  };

  return (
    <div className="leave-application-custom">
      <div className="leave-form-container-custom">
        <h2>Leave Application</h2>
        <form className="leave-form-custom" onSubmit={handleSubmit}>
          <label>
            Type of leave
            <select
              name="leaveType"
              value={formData.leaveType}
              onChange={handleInputChange}
            >
              <option value="" disabled>
                Select leave type
              </option>{' '}
              {/* Placeholder option */}
              <option value="sick">Sick Leave</option>
              <option value="casual">Casual Leave</option>
            </select>
          </label>
          <label>
            Leave from date
            <input
              type="date"
              name="leaveFromDate"
              value={formData.leaveFromDate}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Leave to date
            <input
              type="date"
              name="leaveToDate"
              value={formData.leaveToDate}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Reason of leave
            <input
              type="text"
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Attach File
            <input type="file" onChange={handleFileChange} />
          </label>
          <button type="submit" className="apply-leave-button">Apply Leave</button>
        </form>
      </div>
      <div className="leave-info-container-custom">
        <div className="remaining-leaves-custom">
          <h2>Your Overview</h2>
          <div className="leave-overview-custom">
            <div className="leave-entitlement-custom">
              <h3>Total Leaves</h3>
              <p className="leave-days-custom">{totalLeaves.sick + totalLeaves.casual}</p>
            </div>
            <div className="leave-entitlement-custom">
              <h3>Remaining Leaves</h3>
              <p className="leave-days-custom">{remainingLeaves.sick + remainingLeaves.casual}</p>
            </div>
          </div>
          <button className="view-more-btn-custom" onClick={() => setShowMore(!showMore)}>
            {showMore ? 'View Less' : 'View More'}
          </button>
        </div>
        {showMore && (
          <div className="leave-availability-custom">
            <h2>Leave Availability</h2>
            <div className="leave-types-custom">
              <div className="leave-type-custom">
                <h3>Sick Leaves</h3>
                <p className="leave-total-custom">Total: {totalLeaves.sick}</p>
                <p className="leave-remaining-custom">Remaining: {remainingLeaves.sick}</p>
              </div>
              <div className="leave-type-custom">
                <h3>Casual Leaves</h3>
                <p className="leave-total-custom">Total: {totalLeaves.casual}</p>
                <p className="leave-remaining-custom">Remaining: {remainingLeaves.casual}</p>
              </div>
            </div>
          </div>
        )}
        <div className="leave-info-custom">
          <h2>Leave Information</h2>
          <table>
            <thead>
              <tr>
                <th>Type of leave</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Reason</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {leaveData.map((leave, index) => (
                <tr key={index}>
                  <td>{leave.leaveType}</td>
                  <td>{leave.leaveFromDate}</td>
                  <td>{leave.leaveToDate}</td>
                  <td>{leave.reason}</td>
                  <td>Pending</td> {/* Assuming status is pending upon application */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaveApplication;
