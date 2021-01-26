import React from 'react';
import {
  useSelector
} from 'react-redux';
import './ProjectDetail.css';
import {
  useParams
} from 'react-router-dom';

function ProjectDetail() {
  const { projectId } = useParams();
  const projects = useSelector(state => state.project.projects);
  const project = projects.find(project => project.id.toString() === projectId.toString());

  // get associated charity

  return ( 
    <div>
      <h1>{project.name}</h1>
      <h2>associated charity: [charity] </h2>
      <h2>outstanding shares: [outstanding shares]</h2>
      <h2>karma per share: {project.karmaPerShare}</h2>
      <h2>cost per share: {project.costPerShare}</h2>
      <button>purchase shares, redirect to PurchasingPage</button>
    </div>  
  )
}

export default ProjectDetail;