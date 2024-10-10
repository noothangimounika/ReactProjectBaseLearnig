
const jobReducer = (state, action) => {
    switch (action.type) {
      case 'SET_JOBS':
        return { ...state, jobs: action.payload };
      case 'UPDATE_JOB_STATUS':
        return {
          ...state,
          jobs: state.jobs.map((job) =>
            job.id === action.payload.id ? { ...job, status: action.payload.status } : job
          ),
        };
      case 'SET_FILTER':
        return { ...state, filter: action.payload };
      default:
        return state;
    }
  };
  
  export default jobReducer;
  