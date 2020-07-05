import { reset } from 'redux-form'
import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getReviewsSuccess = reviews => {
    return {
        type: actionTypes.GET_REVIEWS_SUCCESS,
        reviews
    };
};

export const addReviewSuccess = review => {
    return {
        type: actionTypes.ADD_REVIEW_SUCCESS,
        review
    };
};

export const addReview = reviewData => {
    return dispatch => {
        axios.post('api/reviews', reviewData)
        .then(response => {
            dispatch(reset('add-review')); 
            dispatch(addReviewSuccess(response.data.data))
        });
    };
};

export const getReviews = () => {
    return dispatch => {
        axios.get('api/reviews')
        .then(response => dispatch(getReviewsSuccess(response.data.data)));
    };
};