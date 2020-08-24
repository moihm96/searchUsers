import {FETCH_USERS, FETCH_FOLLOWERS, FETCH_REPOS} from "../actions/type";

const INITIAL_STATE = {
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return action.payload
        case FETCH_FOLLOWERS:
            return action.payload
        case FETCH_REPOS:
            return action.payload
        default:
            return state
    }
}