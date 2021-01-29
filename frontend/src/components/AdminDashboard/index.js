
import React, { useState, useEffect } from 'react';
import * as projectActions from '../../store/project';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './AdminDashboard.css';
  function AdminDashboard() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(projectActions.getProjects());
    }, [useSelector]);
    
    const projects = useSelector(state => state.project.projects);

    const markComplete = (e) => {
        dispatch(projectActions.updateProject(e.target.value));
        e.target.parentNode.hidden = true;
    }

    return (
        <div>
          <h3>projects in progress</h3>
          {projects && projects.map(project => (
            <div hidden={project.karmaReleased} key={project.id} className="project">
                <p>{project.name}</p>
                <button value={project.id} onClick={markComplete}>mark as complete</button>
            </div>
          ))}
      </div>
    );
  }

  export default AdminDashboard;