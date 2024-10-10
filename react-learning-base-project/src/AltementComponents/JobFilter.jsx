import React, { useContext } from 'react';
import JobContext from './JobContext';


const JobFilter = () => {
  const { dispatch } = useContext(JobContext);

  const handleFilterChange = (filter) => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  };

  return (
    <div className={JobFilter}>
      <label>Filter by status:</label>
      <select onChange={(e) => handleFilterChange(e.target.value)}>
        <option value="all">All</option>
        <option value="applied">Applied</option>
        <option value="interview">Interview</option>
        <option value="offered">Offered</option>
        <option value="rejected">Rejected</option>
      </select>
    </div>
  );
};

export default JobFilter;
