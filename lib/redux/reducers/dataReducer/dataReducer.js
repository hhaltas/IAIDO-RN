import * as actionTypes from '../../actiontypes';
import initialstate from '../../initialstate';

export default function dataIdReducer(state = initialstate.data, action) {
  switch (action.type) {
    case actionTypes.TAKE_DATA:
      return action.type;
    default:
      return state;
  }
}
