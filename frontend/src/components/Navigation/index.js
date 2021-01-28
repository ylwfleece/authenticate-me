import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />   
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/watchlist">Watchlist</NavLink>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
        <NavLink to="/demo">Demo</NavLink>
      </>
    );
  }



  return (
    <>
        {!isLoaded && <NavLink exact to="/">Home</NavLink>}
        {isLoaded && sessionLinks}
     </>
  );
}

export default Navigation;