import {
    fetch
} from './csrf';

const SET_CHARITIES = 'session/setCharities';

const setCharities = (charities) => {
    return {
        type: SET_CHARITIES,
        payload: charities
    }
}

export const getCharities = () => async (dispatch) => {
    const response = await fetch("/api/charities");
    dispatch(setCharities(response.data.charities));
    return response;
};

const initialState = {
    charities: null
};

const charityReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_CHARITIES:
            newState = Object.assign({}, state);
            newState.charities = action.payload;
            return newState;
        default:
            return state;
    }
};

export default charityReducer;