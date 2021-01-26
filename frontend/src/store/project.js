import {
    fetch
} from './csrf';

const SET_PROJECTS = 'session/setProjects';

const getProjects = () => async (dispatch) => {
    // MAKE FETCH HERE
    const response = await fetch("/api/projects");
    // MAKE DISPATCH HERE
    dispatch(setProjects)
};

// export const signup = (user) => async (dispatch) => {
//     const {
//         username,
//         password
//     } = user;
//     const accountBalance = 10000;
//     const response = await fetch("/api/users", {
//         method: "POST",
//         body: JSON.stringify({
//             username,
//             password,
//             accountBalance
//         }),
//     });
//     dispatch(setUser(response.data.user));
//     return response;
// };

const initialState = {
    user: null
};

const sessionReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_ALL_PROJECTS:
            newState = Object.assign({}, state);

            newState.projects = action.payload;
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