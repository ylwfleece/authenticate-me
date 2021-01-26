import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import * as projectActions from '../../store/project';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './ProjectsPage.css';
import { Link } from 'react-router-dom';
function ProjectsPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const projects = useSelector(state => state.project.projects);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    return dispatch(projectActions.getProjects());
  }, [dispatch, useSelector])

  return (
      <div>
            <h3>projects</h3>
            {projects && projects.map(project => (
              <li key={project.id}>
                <ul>
                <Link to={`/projects/${project.id}`}>{project.name}</Link>
                </ul>
              </li>
            ))}
    </ div>
  );
}

export default ProjectsPage;