import { combineReducers } from "redux";

// Create a reducer function for each piece of data in state.js
//   * newComments
//   * newTasks
//   * newOrders
//   * tickets
//   * orders
//   * tasks
//   * messages
// * Remember 2 parameters state and action. Remember to return state
// * Combine the reducers and export

function newComments(state = 0, action) {
  return state;
}

function newTasks(state = 0, action) {
  return state;
}

function newOrders(state = 0, action) {
  return state;
}
function tickets(state = 0, action) {
  return state;
}

function orders(state = [], action) {
  return state;
}

function tasks(state = [], action) {
  return state;
}

function messages(state = [], action) {
  return state;
}

const rootReducer = combineReducers({
  newComments,
  newTasks,
  newOrders,
  tickets,
  orders,
  tasks,
  messages
});

export default rootReducer;
