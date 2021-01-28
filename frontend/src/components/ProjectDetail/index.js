import React, {useEffect} from 'react';
import {
  useSelector, useDispatch
} from 'react-redux';
import './ProjectDetail.css';
import {
  useParams, 
  Link
} from 'react-router-dom';
import * as charityActions from '../../store/charity';
import * as projectActions from '../../store/project';
import * as watchlistActions from '../../store/watchlist';
import * as purchaseActions from '../../store/purchase';

function ProjectDetail() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(projectActions.getProjects());
    dispatch(watchlistActions.getWatchlists());
    dispatch(purchaseActions.getPurchases());
    dispatch(charityActions.getCharities());
  }, [useSelector]);

  const { projectId } = useParams();
  const projects = useSelector(state => state.project.projects);
  let project;
  if (projects) {
    project = projects.find(project => project.id.toString() === projectId.toString());
  } 

  const charities = useSelector(state => state.charity.charities);
  let charity;
  if (charities) {
    charities.forEach(el => {
      if (el.id === project.charityId) {
        charity = el;
      }
    });
  }
  
  return ( 
    <div className="project">
      <h1>{project && project.name}</h1>
      <h2>associated charity: {charity && charity.name} </h2>
      <h2>karma per share: {project && project.karmaPerShare} karmic units</h2>
      <h2>cost per share: ${project && project.costPerShare}</h2>
      <Link to={`/purchasing/${project && project.id}`}>purchase shares</Link>
    </div>  
  )
}

export default ProjectDetail;