import React, { useState, useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { createRoot } from 'react-dom/client';
import axios from 'axios';
import Home from './Home';
import Users from './Users';
import Things from './Things';
import Nav from './Nav';
import store from './store';

const App = ()=> {
  const dispatch = useDispatch();
  const { view } = useSelector(state => state);

  useEffect(()=> {
    window.addEventListener('hashchange', ()=> {
      dispatch({ type: 'SET_VIEW', view: window.location.hash.slice(1)});
    });
    dispatch({ type: 'SET_VIEW', view: window.location.hash.slice(1)});
  }, []);

  useEffect(()=> {
    const fetchData = async()=> {
      const response = await axios.get('/api/things');
      dispatch({ type: 'SET_THINGS', things: response.data });
    };
    fetchData();
  }, []);

  useEffect(()=> {
    const fetchData = async()=> {
      const response = await axios.get('/api/users');
      dispatch({ type: 'SET_USERS', users: response.data });
    };
    fetchData();
  }, []);

  return (
    <div>
      <Nav />
      { view === '' && <Home /> }
      { view === 'users' && <Users /> }
      { view === 'things' && <Things /> }
    </div>
  );
};


const root = createRoot(document.querySelector('#root'));
root.render(<Provider store={ store }><App /></Provider>);
