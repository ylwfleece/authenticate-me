import React, { useEffect, useState } from 'react';
import {
  useSelector, useDispatch
} from 'react-redux';
import './PurchasingPage.css';
import {
  useHistory,
  useParams, 
//   Link
} from 'react-router-dom';
import * as purchaseActions from '../../store/purchase';
import * as projectActions from '../../store/project';

function PurchasingPage() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(projectActions.getProjects());
        dispatch(purchaseActions.getPurchases());
    }, [useSelector, dispatch]);

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

    let purchasedShares = 0;

    for (let i=0; i<projectPurchases.length; i++) {
      purchasedShares += projectPurchases[i].numberOfShares;
    }

    const [shares, setShares] = useState(0);

    const availableShares = project.numberOfShares - purchasedShares;

    const userId = useSelector(state => state.session.user.id);

    const history = useHistory();

    const onSubmit = async (e) => {
      e.preventDefault();
      const purchase = await dispatch(purchaseActions.createPurchase({ numberOfShares: shares, userId, projectId}));
      const purchaseId = purchase.id;
      history.push(`/purchase/${purchaseId}`);
    }

    return (
        <div>
            <h1>Purchase order for {project.name}</h1>
            {/* <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.againstmalaria.com%2Fbobcomer&psig=AOvVaw34fkAmFeqTwmxDleILLcRP&ust=1611850763740000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLiRtJ7CvO4CFQAAAAAdAAAAABAD" */}
            <h2>Karma per share: {project.karmaPerShare}</h2>
            <h3>available shares: {availableShares}</h3>
            <h3>cost per share: ${project.costPerShare}</h3>
            <h3>--</h3>
            <form hidden={availableShares < 1} className="cat-form" onSubmit={onSubmit}>
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
                type="number"
                name="shares"
                value={shares}
                onChange={(e) => setShares(e.target.value)}
              />
            </label>
            {/* <a hidden={shares >= 10}>must purchase at least 10 shares</a> */}
            <button type="submit" disabled={(shares < 1 || shares > availableShares)}>submit purchase</button>
            <p hidden={!(shares < 1 || shares > availableShares)}> must purchase between 1 and {availableShares} shares</p>
            <h3 hidden={(availableShares < 1 || shares > availableShares)}>cost of purchase: ${(shares * project.costPerShare).toFixed(2)}</h3>
          </form>
          <h2 hidden={availableShares > 0}>All shares have been purchased</h2>
          
        </div>
    );
} 

export default PurchasingPage;