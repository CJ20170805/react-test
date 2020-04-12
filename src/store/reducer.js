import * as types from './actionType';

const initState={
  name: 'Areya',
  age: '12'
}

export const setInputData = (state=initState,action)=>{
    switch(action.type){
      case types.SETINPUTDATA:
        console.log('Hahahaha',state,action);
        return {...state,...action.payload}
        break;
      default: 
       return state;
    }
}