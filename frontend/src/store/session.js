import {
    fetch
} from './csrf';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user,
    };
};

const removeUser = () => {
    return {
        type: REMOVE_USER,
    };
};

export const signup = (user) => async (dispatch) => {
    const {
        username,
        password
    } = user;
    const accountBalance = 10000;
    const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
            username,
            password,
            accountBalance
        }),
    });
    dispatch(setUser(response.data.user));
    return response;
};

export const restoreUser = () => async dispatch => {
    const res = await fetch('/api/session');
    dispatch(setUser(res.data.user));
    return res;
};

export const login = (user) => async (dispatch) => {
    const {
        credential,
        password
    } = user;
    const response = await fetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({
            credential,
            password,
        }),
    });
    dispatch(setUser(response.data.user));
    return response;
};

export const logout = () => async (dispatch) => {
    const response = await fetch('/api/session', {
      method: 'DELETE',
    });
    dispatch(removeUser());
    return response;
  };

const initialState = {
    user: null
};

const sessionReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_USER:
            newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        case REMOVE_USER:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        default:
            return state;
    }
};

export default sessionReducer;