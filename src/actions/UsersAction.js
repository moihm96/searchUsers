import {FETCH_USERS, FETCH_FOLLOWERS, FETCH_REPOS} from "../actions/type";


export const usersFetch = () => {
    return (dispatch) => {

        fetch("https://api.github.com/users")
        .then(res => res.json())
        .then(res =>{
            dispatch({ type: FETCH_USERS, payload: res });
        });     
    }
}

export const followersFetch = (name) => {
    return (dispatch) => {
        
        fetch("https://api.github.com/users/"+ name + "/followers")
        .then(res => res.json())
        .then(res =>{
            dispatch({ type: FETCH_FOLLOWERS, payload: res });
        });      
    }
}

export const reposFetch = (name) => {
    return (dispatch) => {
        fetch("https://api.github.com/users/"+ name + "/repos")
        .then(res => res.json())
        .then(res =>{
            dispatch({ type: FETCH_REPOS, payload: res });
        });      
    }
}