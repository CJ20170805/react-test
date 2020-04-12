import * as types from './actionType';

export const setInputData = (payload)=>{
  return{
    type: types.SETINPUTDATA,
    payload
  }
}