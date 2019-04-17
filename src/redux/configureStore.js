import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Stories } from './stories';
import { Comments } from './comments';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            stories: Stories,
            comments: Comments
            }),
        applyMiddleware(thunk, logger)
    );

    return store;
} 