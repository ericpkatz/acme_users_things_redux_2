import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const countReducer = (state = 0, action)=> {
  if(action.type === 'INC'){
    state++;
    return state;
  }
  return state;
};
const thingsReducer = (state = [], action)=> {
  if(action.type === 'SET_THINGS'){
    return action.things; 
  }
  if(action.type === 'CREATE_THING'){
    return [...state, action.thing ]; 
  }
  if(action.type === 'DESTROY_THING'){
    return state.filter(_thing => _thing.id !== action.thing.id );
  }
  return state;
};

const usersReducer = (state = [], action)=> {
  if(action.type === 'SET_USERS'){
    return action.users; 
  }
  return state;
};

const viewReducer = (state = '', action)=> {
  if(action.type === 'SET_VIEW'){
    return action.view; 
  }
  return state;
};

const reducer = combineReducers({
  users: usersReducer,
  things: thingsReducer,
  view: viewReducer,
  count: countReducer
});


const store = createStore(reducer, applyMiddleware(logger));

export default store;
