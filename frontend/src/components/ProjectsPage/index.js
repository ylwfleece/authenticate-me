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

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(projectActions.getProjects());
    dispatch(watchlistActions.getWatchlists());
    dispatch(purchaseActions.getPurchases());
  }, [useSelector]);

  const user = useSelector(state => state.session.user);
  const projects = useSelector(state => state.project.projects);

  let purchases = useSelector(state => state.purchase.purchases);
  let purchasedProjects = [];

  if (purchases) {
    purchases = purchases.filter(p => p.userId === user.id);
    purchases.forEach(p => {
      if(!purchasedProjects.includes(p.projectId)) {
        purchasedProjects.push(p.projectId);
      }
    });
  }

  let watchlists = useSelector(state => state.watchlist.watchlists);
  let watchlistedProjects = [];
  if (watchlists) {
    watchlists = watchlists.filter(w => w.userId === user.id);
    watchlists.forEach(w => {
      if(!watchlistedProjects.includes(w.projectId)) {
        watchlistedProjects.push(w.projectId);
      }
    });
  }

  const [ success, setSuccess ] = useState(false);
  const [ watchProjectId, setWatchProjectId ] = useState();

  console.log(watchProjectId, "51");

  const showSuccess = (projectId) => {
    setSuccess(true);
    setWatchProjectId(projectId);
    console.log(watchProjectId, "54");
  }

  const addToWatchlist = (e, projectId) => {
    e.target.hidden = true;
    dispatch(watchlistActions.createWatchlist({ userId: user.id, projectId }));
    showSuccess(projectId);
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
              <p key={project.costPerShare}>cost per share: {project.costPerShare}, {(!(purchasedProjects.includes(project.id) || watchlistedProjects.includes(project.id))) && <button onClick={(e) => addToWatchlist(e, project.id)}>add to watchlist</button>}</p> 
              <p key={project.id} className="success" hidden={(!success || watchProjectId !== project.id)}>successfully added to watchlist</p> 
          </li>
        ))}
    </div>
  );
}

export default ProjectsPage;