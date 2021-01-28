import React, { useEffect, useState } from 'react';
import {
  useSelector, useDispatch
} from 'react-redux';
import './Dashboard.css';
import {
    useHistory,
  useParams, 
//   Link
} from 'react-router-dom';
import * as purchaseActions from '../../store/purchase';
import * as projectActions from '../../store/project';

function Dashboard() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(projectActions.getProjects());
        dispatch(purchaseActions.getPurchases());
    }, [useSelector]);

    const user = useSelector(state => state.session.user);
    let purchases = useSelector(state => state.purchase.purchases);
    let projects = useSelector(state => state.project.projects);

    let purchasesObj = {};

    if (purchases) {
        purchases = purchases.filter(purchase => purchase.userId === user.id);
        purchases.forEach(p => {
            if (purchasesObj[p.projectId]) {
                purchasesObj[p.projectId].numberOfShares += p.numberOfShares;
            } else {
                purchasesObj[p.projectId] = p;
            }
            if (!purchasesObj[p.projectId].project) {
                purchasesObj[p.projectId].project = projects.find(project => project.id === p.projectId);
            }
        });
    }
    purchases = Object.values(purchasesObj);

    let pendingKarma = 0; // karma per share of purchases where project.karmarel = false
    let earnedKarma = 0;
    purchases.forEach(p => {
        if (!p.project.karmaReleased) {
            pendingKarma += p.numberOfShares * p.project.karmaPerShare;
        } else {
            earnedKarma += p.numberOfShares * p.project.karmaPerShare;
        }
    })

    return (
        <div>
            <h2>Your portfolio</h2>
            <div>
             {purchases.length > 0 && 
                purchases.map(purchase => 
                <div className="project" key={purchase.id}>{purchase.project.name}: {purchase.numberOfShares} shares, {purchase.project.karmaReleased ? <>earned karma: </> : <>pending karma: </>}{purchase.numberOfShares * purchase.project.karmaPerShare}</div>)}
            </div>
            <h2>Your karma</h2>
            <div>
                <p className="karma">pending: {pendingKarma}</p>
                <p className="karma">earned: {earnedKarma}</p>
            </div>
        </div>
    )
}

export default Dashboard;