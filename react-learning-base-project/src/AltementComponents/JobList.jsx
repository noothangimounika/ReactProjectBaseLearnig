import React, { useContext, useMemo } from 'react';
import JobContext from './JobContext';
import JobDetails from './JobDetails';


const JobList = () => {
  const { state } = useContext(JobContext);
  const { jobs, filter } = state;

  const filteredJobs = useMemo(() => {
    if (filter === 'all') return jobs;
    return jobs.filter((job) => job.status === filter);
  }, [jobs, filter]);

  return (
    <div className={JobList}>
      {filteredJobs.map((job) => (
        <JobDetails key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
