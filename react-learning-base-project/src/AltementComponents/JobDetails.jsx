import React, { useContext } from 'react';
import JobContext from './JobContext';
import JobStatus from './JobStatus';


const JobDetails = ({ job }) => {
  const { dispatch } = useContext(JobContext);

  const handleStatusChange = (status) => {
    dispatch({ type: 'UPDATE_JOB_STATUS', payload: { id: job.id, status } });
  };

  return (
    <div className={JobDetails}>
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <JobStatus status={job.status} onStatusChange={handleStatusChange} />
    </div>
  );
};

export default JobDetails;
