import React, { useState, useEffect } from 'react';
// import * as sessionActions from '../../store/session';
import * as projectActions from '../../store/project';
import * as watchlistActions from '../../store/watchlist';
import * as purchaseActions from '../../store/purchase';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import './ProjectsPage.css';
import { Link } from 'react-router-dom';

function ProjectsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(projectActions.getProjects());
    dispatch(watchlistActions.getWatchlists());
    dispatch(purchaseActions.getPurchases());
  }, [useSelector]);

  const user = useSelector(state => state.session.user);
  const projects = useSelector(state => state.project.projects);

  let purchases = useSelector(state => state.purchase.purchases);
  console.log(purchases);
  let purchasedProjects = [];

  if (purchases) {
    purchases = purchases.filter(p => p.userId === user.id);
    purchases.forEach(p => {
      if(!purchasedProjects.includes(p.projectId)) {
        purchasedProjects.push(p.projectId);
      }
    });
  }

  console.log(purchasedProjects);

  let watchlists = useSelector(state => state.watchlist.watchlists);
  if (watchlists) {
    watchlists = watchlists.filter(w => w.userId === user.id);
  }

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