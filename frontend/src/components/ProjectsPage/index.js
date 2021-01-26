import React, { useState, useEffect } from 'react';
// import * as sessionActions from '../../store/session';
import * as projectActions from '../../store/project';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import './ProjectsPage.css';
import { Link } from 'react-router-dom';

function ProjectsPage() {
  const dispatch = useDispatch();
  const projects = useSelector(state => state.project.projects);
  // const projectI

  const history = useHistory();

  const redirectToDetail = (projectId) => {
    // set project detail in state
    console.log("redirecting to project: ", projectId);
    // history.push(`/projects/${projectId}`);
  }

  useEffect(() => {
    return dispatch(projectActions.getProjects());
  }, [dispatch, useSelector])

  return (
      <div>
        <h3>available projects</h3>
        {projects && projects.map(project => (
          <li key={project.id}>
              <Link 
                to={`/project/${project.id}`} 
                onClick={redirectToDetail}
              >
                {project.name}
              </Link>
              <p key={project.costPerShare}>cost per share: {project.costPerShare}</p>  
          </li>
            
        ))}
    </div>
  );
}

export default ProjectsPage;