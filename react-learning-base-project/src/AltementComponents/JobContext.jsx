import React, { createContext, useReducer } from 'react';
import jobReducer from './jobReducer';

const JobContext = createContext();

const initialState = {
  jobs: [],
  filter: 'all',
};

export const JobProvider = ({ children }) => {
  const [state, dispatch] = useReducer(jobReducer, initialState);

  return (
    <JobContext.Provider value={{ state, dispatch }}>
      {children}
    </JobContext.Provider>
  );
};

export default JobContext;
