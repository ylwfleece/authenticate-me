import React, { useEffect, useState } from 'react';
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
    let projectPurchases = []; 
    if (purchases) {
      purchases.forEach(el => {
        if (el.projectId === project.id) {
          projectPurchases.push(el);
        }
      });
    }

    console.log(projectPurchases)

    let purchasedShares = 0;

    for (let i=0; i<projectPurchases.length; i++) {
      purchasedShares += projectPurchases[i].numberOfShares;
    }

    const availableShares = project.numberOfShares - purchasedShares;

    const [shares, setShares] = useState(0);

    const dispatch = useDispatch();

    useEffect(() => {
      return dispatch(purchaseActions.getPurchases());
    }, [dispatch, useSelector]);

    const userId = useSelector(state => state.session.user.id);

    const onSubmit = (e) => {
      e.preventDefault();
      // dispatch purchase
      return dispatch(purchaseActions.createPurchase({ numberOfShares: shares, userId, projectId}))
    }

    return (
        <div>
            <h1>Purchase order for {project.name}</h1>
            {/* <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.againstmalaria.com%2Fbobcomer&psig=AOvVaw34fkAmFeqTwmxDleILLcRP&ust=1611850763740000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLiRtJ7CvO4CFQAAAAAdAAAAABAD" */}
            <h2>Karma per share: {project.karmaPerShare}</h2>
            <h3>available shares: {availableShares}</h3>
            <h3>cost per share: ${project.costPerShare}</h3>
            <h3>--</h3>
            <form className="cat-form" onSubmit={onSubmit}>
            <h2>Purchase shares</h2>
            <ul className="errors">
              {/* {errors.map(error => (
                <li key={error}>
                  {error}
                </li>
              ))} */}
            </ul>
            <label>
              Number of shares
              <input
                type="text"
                name="shares"
                value={shares}
                onChange={(e) => setShares(e.target.value)}
              />
            </label>
            <button type="submit" disabled={false}>submit purchase</button>
          </form>
        </div>
    );
} 

export default PurchasingPage;