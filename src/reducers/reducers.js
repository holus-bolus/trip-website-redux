import { combineReducers } from 'redux';
import {FETCH_RESULTS_REQUEST, FETCH_RESULTS_SUCCESS} from '../actions/actions';

const initialState = {
    loading: false,
    results: [],
};

const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RESULTS_REQUEST:
            return { ...state, loading: true };
        case FETCH_RESULTS_SUCCESS:
            return { ...state, loading: false, results: action.payload };
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    results: resultsReducer,
});

export default rootReducer;
