import { subscribe, update, states, notifiers } from './store.js';
import { increase, decrease, reset, getState } from './actions.js';

const plusBtn = document.querySelector('[data-plus]');
const minusBtn = document.querySelector('[data-minus]');
const resetBtn = document.querySelector('[data-reset]');
const counter = document.querySelector('[data-counter]');

const addHandler = () => {
  update(increase);
  counter.innerText = states[0].count;
};
plusBtn.addEventListener('click', addHandler);

const subtractHandler = () => {
  update(decrease);
  counter.innerText = states[0].count;
};
minusBtn.addEventListener('click', subtractHandler);

const resetHandler = () => {
  update(reset);
  counter.innerText = states[0].count;
};
resetBtn.addEventListener('click', resetHandler);

// const handler = (prev, next) => console.log('Previous state:', prev, 'Current state:', next);
// subscribe(handler);

//Gerkhin Scenario for challenge
console.log(getState());

update(increase);
update(increase);

console.log(getState());

update(decrease);

console.log(getState());

update(reset);

console.log(getState());
