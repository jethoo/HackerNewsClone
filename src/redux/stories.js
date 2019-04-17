import * as ActionTypes from './ActionTypes';



export const Stories = (state = 
    {
       isLoading: true,
       errMess: null,
       stories: []

    }
    , action ) => {
    switch(action.type){
        case ActionTypes.STORYID_LOADING:
            return {...state, stories: [], isLoading: true, error: null};

        case ActionTypes.STORYID_FAILURE:
            return {...state, error: action.payload, stories: [], isLoading: false};


       case ActionTypes.ADD_STORY:
            return {...state, stories: [...state.stories, action.payload] , isLoading: false, error: null};
        
        case ActionTypes.STORY_FAILURE:
            return {...state, error: action.payload, stories: [], isLoading: false};

        default: 
            return state;
        
            
    }

    
}

