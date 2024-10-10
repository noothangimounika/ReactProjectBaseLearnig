import React from 'react'
import JobFilter from './JobFilter'
import JobList from './JobList'

const AltementsMainPage = () => {
  return (
    <div>
        <JobProvider>
      <div className="app">
        <h1>Job Application Dashboard</h1>
        {/* <JobFilter /> */}
        <JobFilter />
        <JobList />
      </div>
    </JobProvider>
    </div>
  )
}

export default AltementsMainPage