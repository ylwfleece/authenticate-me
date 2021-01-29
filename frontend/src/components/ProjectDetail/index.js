import React, {useEffect, useState } from 'react';
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
import * as sessionActions from '../../store/session';

function ProjectDetail() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(projectActions.getProjects());
    dispatch(watchlistActions.getWatchlists());
    dispatch(purchaseActions.getPurchases());
    dispatch(charityActions.getCharities());
  }, [useSelector]);

  const user = useSelector(state => state.session.user);

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

  // const [ addFunds, setAddFunds ] = useState(false);

  const fundAccount = () => {
    dispatch(sessionActions.updateUser(user.id));
    // setAddFunds(true)
  }
  
  return ( 
    
    <div className="project">
      <h1>{project && project.name}</h1>
      <h2>associated charity: {charity && charity.name} </h2>
      <h2>karma per share: {project && project.karmaPerShare} karmic units</h2>
      <h2>cost per share: ${project && project.costPerShare}</h2>
      <div hidden={user.accountBalance && (user.accountBalance <= project.costPerShare)}>
        <p>you have ${user.accountBalance && user.accountBalance.toString()}</p>
        <Link to={`/purchasing/${project && project.id}`}>purchase shares</Link>
      </div>
      <div hidden={user.accountBalance && user.accountBalance >= project.costPerShare}>
        <p>you don't have enough money to buy a share</p>
        <button onClick={fundAccount}>add $10,000 to account balance</button>
      </div>
    </div>  
  )
}

export default ProjectDetail;