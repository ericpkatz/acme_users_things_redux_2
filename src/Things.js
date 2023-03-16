import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

const Things = ()=> {
  const { things } = useSelector(state => state);
  const dispatch = useDispatch();
  const createThing = async(thing)=> {
    const response = await axios.post('/api/things', thing);
    dispatch({ type: 'ADD_THING', thing: response.data });
  };
  const destroyThing = async(thing)=> {
    await axios.delete(`/api/things/${thing.id}`);
    dispatch({ type: 'DESTROY_THING', thing });
  };
  return (
    <div>
      <h1>Things</h1>
      <button onClick={
        ev => createThing({ name: Math.random() })
      }>Create</button>
      <ul>
        {
          things.map( thing => {
            return (
              <li key={ thing.id }>
                { thing.name }
                <button onClick={ ev => destroyThing(thing)}>x</button>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default Things;
