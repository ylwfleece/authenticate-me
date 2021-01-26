import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './ProjectsPage.css';

function ProjectsPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [errors, setErrors] = useState([]);

  const projects = '';
  // get projects from backend
  

  return (
      <div>
        <ul>
            <p>project here</p>
        </ul>
    </ div>
  );
}

export default ProjectsPage;