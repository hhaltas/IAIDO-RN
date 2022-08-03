import * as actionTypes from '../../actiontypes';

export function dataID(did) {
  return {
    type: actionTypes.TAKE_DATA,
    payload: did,
  };
}
