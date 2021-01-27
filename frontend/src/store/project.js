import {
    fetch
} from './csrf';

const SET_PROJECTS = 'project/setProjects';

const setProjects = (projects) => {
    return {
        type: SET_PROJECTS,
        payload: projects
    }
}

export const getProjects = () => async (dispatch) => {
    const response = await fetch("/api/projects");
    dispatch(setProjects(response.data.projects));
    return response;
};

const initialState = {
    projects: null
};

const projectReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case SET_PROJECTS:
            newState = Object.assign({}, state);
            newState.projects = action.payload;
            return newState;
        default:
            return state;
    }
};

export default projectReducer;