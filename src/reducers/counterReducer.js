import { ACTION } from '../constants/actionTypes';
import produce from 'immer';
const initialState = {
  count: 0,
};
const counterReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ACTION.COUNTER_PLUS:
        draft.count += 1;
        // console.log(draft.count);
        break;
      case ACTION.COUNTER_MINUS:
        draft.count -= 1;
        break;
      default:
        return state;
    }
  });

export default counterReducer;
