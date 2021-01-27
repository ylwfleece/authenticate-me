import React, { useEffect, useState } from 'react';
import {
  useSelector, useDispatch
} from 'react-redux';
import './PurchaseDetail.css';
import {
    useHistory,
  useParams, 
//   Link
} from 'react-router-dom';
import * as purchaseActions from '../../store/purchase';

function PurchaseDetail() {

    const { purchaseId } = useParams();
    console.log(purchaseId)

    const purchases = useSelector(state => state.purchase.purchases);
    let purchase;
    if (purchases) {
        purchase = purchases.find(purchase => purchase.id.toString() === purchaseId.toString());
    }

    const projects = useSelector(state => state.project.projects);
    let project;
    if (projects) {
        project = projects.find(project => project.id.toString() === purchase.projectId.toString());
    }

    // useEffect(() => {
    //     console.log('called useeffect')
    // }, [useSelector])

    const history = useHistory();

    const goToDashboard = () => {
        history.push(`/dashboard`);
    }

    return (
        <div>
            <h2>Congratulations! You've purchased {purchase.numberOfShares} shares of {project.name}</h2>
            <button onClick={goToDashboard}>go to dashboard</button>
        </div>
    )
}

export default PurchaseDetail;