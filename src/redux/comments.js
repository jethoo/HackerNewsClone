import * as ActionTypes from './ActionTypes';


export const Comments = (state = 
    {
       isLoading: true,
       errMess: null,
       comments: []

    }
    , action ) => {
    switch(action.type){
        case ActionTypes.STORY_LOADING:
            return {...state, comments: [], isLoading: true, error: null};

        case ActionTypes.ADD_COMMENTS:
            return {...state, comments: [...state.comments, action.payload ] , isLoading: false, error: null};


       case ActionTypes.COMMENTS_FAILURE:
            return {...state, comments: [] , isLoading: false, error: action.payload};
        
        case ActionTypes.STORY_FAILURE:
            return {...state, error: action.payload, stories: [], isLoading: false};

        default: 
            return state;
        
            
    }

    
}

