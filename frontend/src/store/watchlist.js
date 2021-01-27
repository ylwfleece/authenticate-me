import {
    fetch
} from './csrf';

const SET_WATCHLISTS = 'watchlist/setWatchlists';
const ADD_WATCHLIST = 'watchlist/addWatchlist';

const setWatchlists = (watchlists) => {
    return {
        type: SET_WATCHLISTS,
        payload: watchlists
    }
}

const addWatchlist = (watchlist) => {
    return {
        type: ADD_WATCHLIST,
        payload: watchlist
    }
}

export const createWatchlist = (watchlist) => async (dispatch) => {
    const response = await fetch(`/api/watchlists`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(watchlist),
      });

      if (response.ok) {
        const watchlist = response.data.watchlist;
        dispatch(addWatchlist(watchlist));
        return watchlist;
      }
}

export const getWatchlists = () => async (dispatch) => {
    const response = await fetch("/api/watchlists");
    dispatch(setWatchlists(response.data.watchlists));
    return response;
};

const initialState = {
    watchlists: null
};

const watchlistReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_WATCHLISTS:
            newState = Object.assign({}, state);
            newState.watchlists = action.payload;
            return newState;
        case ADD_WATCHLIST:
            newState = Object.assign({}, state);
            newState.watchlists.push(action.payload);
            return newState;
        default:
            return state;
    }
};

export default watchlistReducer;