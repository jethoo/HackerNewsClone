import * as ActionTypes from './ActionTypes';
import { baseUrl , itemUrl } from '../shared/Url';
import axios from 'axios';
var JSON_QUERY = '.json?print=pretty';



export const fetchIds = () => (dispatch) => {
    dispatch(idLoading(true));

    return axios.get (baseUrl + 'topstories' + `${JSON_QUERY}`)
        .then(response => response.data.slice(0,20))
        .then(ids => 
            ids.map(story => {
                return axios.get (itemUrl + `${story}${JSON_QUERY}`)
            .then (response => {
                dispatch(fetchComments(response.data.id));
                dispatch(addStories(response.data));
            })
            .catch(err => dispatch(storiesFailure(err)))
            
        }))    
        .catch(err => dispatch(storyIdFailure(err)))
        
};

export const idLoading = () => ({
    type: ActionTypes.STORYID_LOADING
});

export const addStories = (response) => ({
    type: ActionTypes.ADD_STORY,
    payload: response
   
});

export const storiesFailure = (err) => ({
    type: ActionTypes.STORY_FAILURE,
    payload: err
});

export const storyIdFailure = (err) => ({
    type: ActionTypes.STORYID_FAILURE,
    payload: err
});



export const fetchComments = (stories) => (dispatch) => {
    
    dispatch(storyLoading(true));

    return axios.get (itemUrl + `${stories}${JSON_QUERY}`)
        .then(response => response.data)
        .then(story => 
            story.kids.map(comment => {
                return axios.get (itemUrl + `${comment}${JSON_QUERY}`
                    
            )
            
            .then (response => 
                dispatch(addComments(response.data))
            )
            .catch(err => dispatch(commentsFailure(err)))
            
        }))    
        .catch(err => dispatch(storyFailure(err)))
        
};

export const storyLoading = () => ({
    type: ActionTypes.STORY_LOADING
});

export const addComments = (response) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: response
});

export const commentsFailure = (err) => ({
    type: ActionTypes.COMMENTS_FAILURE,
    payload: err
});

export const storyFailure = (err) => ({
    type: ActionTypes.STORIES_FAILURE,
    payload: err
});

