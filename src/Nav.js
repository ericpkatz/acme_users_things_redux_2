import React from 'react';
import { useSelector } from 'react-redux';

const Nav = ()=> {
  const {view, users, things } = useSelector(state => state);
  return (
    <nav>
      <a href='#' className={ view === '' ? 'selected': ''}>Home</a>
      <a href='#users' className={ view === 'users' ? 'selected': ''}>Users ({ users.length })</a>
      <a href='#things' className={ view === 'things' ? 'selected': ''}>Things ({ things.length })</a>
    </nav>
  );
};

export default Nav;
