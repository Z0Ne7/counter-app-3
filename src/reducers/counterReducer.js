import { ACTION } from '../constants/actionTypes';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case ACTION.COUNTER_PLUS:
      return state + 1;
    case ACTION.COUNTER_MINUS:
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
