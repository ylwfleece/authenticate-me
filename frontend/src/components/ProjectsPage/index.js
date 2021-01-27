import React, { useState, useEffect } from 'react';
// import * as sessionActions from '../../store/session';
import * as projectActions from '../../store/project';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import './ProjectsPage.css';
import { Link } from 'react-router-dom';

function ProjectsPage() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const projects = useSelector(state => state.project.projects);
  let purchases = useSelector(state => state.purchase.purchases);
  console.log(purchases);
  purchases = purchases.filter(p => p.userId === user.id);

  console.log(purchases);

  useEffect(() => {
    return dispatch(projectActions.getProjects());
  }, [dispatch, useSelector]);

  let purchasedProjects = [];
  if (purchases) {
    purchases.forEach(p => {
      if(!purchasedProjects.includes(p.projectId)) {
        purchasedProjects.push(p.projectId);
      }
    });
  }
  console.log(purchasedProjects)

  return (
      <div>
        <h3>available projects</h3>
        {projects && projects.map(project => (
          <li key={project.id}>
              <Link 
                to={`/project/${project.id}`} 
              >
                {project.name}
              </Link>
              <p key={project.costPerShare}>cost per share: {project.costPerShare}, {!purchasedProjects.includes(project.id) && <button>add to watchlist</button>}</p>  
          </li>
            
        ))}
    </div>
  );
}

export default ProjectsPage;