import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './DemoLoginPage.css';

function DemoLoginPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const demoLogin = () => {
    setErrors([]);
    return dispatch(sessionActions.login({ credential: 'Demo-lition', password: 'password' }))
      .catch((res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      });
  }

  return (
      <div className="container">
        <button className="demoLoginBtn" onClick={demoLogin}>Log in as demo user</button>
    </ div>
  );
}

export default DemoLoginPage;