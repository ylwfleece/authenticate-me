import './LandingPage.css';
import buddha from './buddhap.jpg';
import * as sessionActions from '../../store/session';
import {useSelector} from 'react-redux';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { 
    Link
  } from 'react-router-dom';
function LandingPage() {

    const user = useSelector(state => state.session.user);
    let username;
    if (user) {
        username = user.username;
    }

    return (
        <div className="landing">
            <div>Welcome to Robinkarma{username && <>, {username} <Link to={`/projects`}>see projects</Link> </>}</div>
            <img src={buddha} alt="buddha"/>
        </div>
    )
}

export default LandingPage;