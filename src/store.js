import { createStore } from 'redux';

const initialState = {
  users: [],
  things: [],
  view: ''
};

const reducer = (state = initialState, action)=> {
  if(action.type === 'SET_THINGS'){
    return {...state, things: action.things };
  }
  if(action.type === 'ADD_THING'){
    return {...state, things: [ ...state.things, action.thing] };
  }
  if(action.type === 'DESTROY_THING'){
    return {...state, things: state.things.filter(_thing => _thing.id !== action.thing.id )}
  }
  if(action.type === 'SET_USERS'){
    return {...state, users: action.users };
  }
  if(action.type === 'SET_VIEW'){
    return {...state, view: action.view };

  }
  return state;
};

const store = createStore(reducer);

export default store;
