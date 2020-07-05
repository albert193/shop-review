import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility'

const initialState = {
    reviews: []
};

const getReviewsSuccess = (state, action) => {
    return updateObject(state, {
        reviews: action.reviews
    });
};

const addReviewSuccess = (state, action) => {
    return updateObject(state, {
        reviews: state.reviews.concat(action.review)
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_REVIEWS_SUCCESS: 
            return getReviewsSuccess(state, action);
        case actionTypes.ADD_REVIEW_SUCCESS: 
            return addReviewSuccess(state, action);
        default: 
            return state;
    }
};

export default reducer;