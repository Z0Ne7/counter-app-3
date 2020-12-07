import { ACTION } from '../constants/actionTypes';

export const counterPlus = () => {
  return {
    type: ACTION.COUNTER_PLUS,
  };
};

export const counterMinus = () => {
  return {
    type: ACTION.COUNTER_MINUS,
  };
};
