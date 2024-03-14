import { states } from './store.js';
export const increase = (state) => {
  return {
    ...state,
    count: state.count + 1,
  };
};

export const decrease = (state) => {
  return {
    ...state,
    count: state.count - 1,
  };
};

export const reset = (state) => {
  return {
    ...state,
    count: 0,
  };
};

export const getState = () => {
  return states[0];
};
