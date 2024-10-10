import React from 'react';


const JobStatus = ({ status, onStatusChange }) => {
  return (
    <div className={JobStatus}>
      <label>Status:</label>
      <select
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        
      >
        <option value="applied">Applied</option>
        <option value="interview">Interview</option>
        <option value="offered">Offered</option>
        <option value="rejected">Rejected</option>
      </select>
    </div>
  );
};

export default JobStatus;
