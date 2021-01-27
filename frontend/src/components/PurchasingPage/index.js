import React from 'react';
import {
  useSelector
} from 'react-redux';
import './PurchasingPage.css';
import {
  useParams, 
//   Link
} from 'react-router-dom';

function PurchasingPage() {

    const { projectId } = useParams();
    const projects = useSelector(state => state.project.projects);
    const project = projects.find(project => project.id.toString() === projectId.toString());

    return (
        <div>
            <h1>Purchase order for {project.name}</h1>
            <h3>outstanding shares: </h3>
            
        </div>
    );
} 

export default PurchasingPage;