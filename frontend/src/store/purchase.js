import {
    fetch
} from './csrf';

const SET_PURCHASES = 'purchase/setPurchases';
const ADD_PURCHASE = 'purchase/addPurchase';

const setPurchases = (purchases) => {
    return {
        type: SET_PURCHASES,
        payload: purchases
    }
}

const addPurchase = (purchase) => {
    return {
        type: ADD_PURCHASE,
        payload: purchase
    }
}

export const createPurchase = (purchase) => async (dispatch) => {
    const response = await fetch(`/api/purchases`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(purchase),
      });

      if (response.ok) {
        // const purchase = await response.json();
        const purchase = response.data.purchase;
        dispatch(addPurchase(purchase));
        return purchase;
      }
}

export const getPurchases = () => async (dispatch) => {
    const response = await fetch("/api/purchases");
    dispatch(setPurchases(response.data.purchases));
    return response;
};

const initialState = {
    purchases: null
};

const purchaseReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_PURCHASES:
            newState = Object.assign({}, state);
            newState.purchases = action.payload;
            return newState;
        case ADD_PURCHASE:
            newState = Object.assign({}, state);
            newState.purchases.push(action.payload);
            return newState;
        default:
            return state;
    }
};

export default purchaseReducer;