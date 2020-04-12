import {createStore, combineReducers, applyMiddleware} from 'redux';
import {setInputData} from './reducer';
import thunk from 'redux-thunk';

let store = createStore(setInputData, applyMiddleware(thunk));


//监听
store.subscribe(()=>{
 console.log('State', store.getState());
})

export default store;

// let initState1 = {
//   num: 1,
//   text: '111'
// }
// let reducer1 = (state=initState1, action)=>{
//  console.log('Action', action, 'State', state);
//  switch(action.type){
//    case 'f1':
//      //return Object.assign({},state,action.oob);
//      return {...state, ...action.payload}
//      break;
//    default:
//      return state;
//      break;
//  }
//   return state;
// }

// let initState2 = {
//  num: 2,
//  text: '222'
// }
// let reducer2 = (state=initState2, action)=>{
//  console.log('Action2', action, 'State', state);
//  switch(action.type){
//    case 'f2':
//      //return Object.assign({},state,action.oob);
//      return {...state, ...action.payload}
//      break;
//      default:
//        return state;
//        break;
//  }
//   return state;
// }
