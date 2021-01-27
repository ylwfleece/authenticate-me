import React, { useEffect } from 'react';
import {
  useSelector, useDispatch
} from 'react-redux';
import './PurchasingPage.css';
import {
  useParams, 
//   Link
} from 'react-router-dom';
import * as purchaseActions from '../../store/purchase';

function PurchasingPage() {

    const { projectId } = useParams();
    const projects = useSelector(state => state.project.projects);
    const project = projects.find(project => project.id.toString() === projectId.toString());

    const purchases = useSelector(state => state.purchase.purchases);
    const projectPurchases = purchases.find(purchase => purchase.projectId.toString() === project.id.toString());

    let purchasedShares = 0;
    for (let i=0; i<projectPurchases.length; i++) {
      purchasedShares += projectPurchases[i].numberOfShares;
    }

    let outstandingShares = project.numberOfShares - purchasedShares;

    const dispatch = useDispatch();

    useEffect(() => {
      console.log('in purchasing page use ef')
      return dispatch(purchaseActions.getPurchases());
    }, [dispatch, useSelector]);

    return (
        <div>
            <h1>Purchase order for {project.name}</h1>
            {/* <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.againstmalaria.com%2Fbobcomer&psig=AOvVaw34fkAmFeqTwmxDleILLcRP&ust=1611850763740000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLiRtJ7CvO4CFQAAAAAdAAAAABAD" */}
            <h2>Karma per share: {project.karmaPerShare}</h2>
            <h3>outstanding shares: {outstandingShares} - [shares of existing purchase orders with projectid]</h3>
            <h3>cost per share: {project.costPerShare}</h3>
            <h3></h3>
        </div>
    );
} 

export default PurchasingPage;