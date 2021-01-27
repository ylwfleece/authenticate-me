import {
    fetch
} from './csrf';

const SET_PURCHASES = 'session/setPurchases';

const setPurchases = (purchases) => {
    return {
        type: SET_PURCHASES,
        payload: purchases
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
        default:
            return state;
    }
};

export default purchaseReducer;