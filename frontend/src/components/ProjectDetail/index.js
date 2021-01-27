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


function ProjectDetail() {
  const { projectId } = useParams();
  const projects = useSelector(state => state.project.projects);
  const project = projects.find(project => project.id.toString() === projectId.toString());

  const dispatch = useDispatch();

  const charities = useSelector(state => state.charity.charities);
  const charity = charities.find(charity => charity.id.toString() === project.charityId.toString());
  console.log(charity);

  
  
  useEffect(() => {
    console.log('in use ef')
    return dispatch(charityActions.getCharities());
  }, [dispatch, useSelector]);

  // get associated charity
  
  // calculate outstanding shares
 


  return ( 
    <div>
      <h1>{project.name}</h1>
      <h2>associated charity: [charity] </h2>
      <h2>outstanding shares: [outstanding shares]</h2>
      <h2>karma per share: {project.karmaPerShare}</h2>
      <h2>cost per share: {project.costPerShare}</h2>
      <Link to={`/purchasing/${project.id}`}>purchase shares, redirect to PurchasingPage</Link>
    </div>  
  )
}

export default ProjectDetail;