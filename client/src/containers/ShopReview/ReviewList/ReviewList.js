import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import StarRating from '../../../components/UI/StarRating/StarRating';
import { getReviews } from '../../../store/actions/review';

import './ReviewList.scss';

const ReviewList = ({ onGetReviews, reviews }) => {
    useEffect(() => {
        onGetReviews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const reviewList = (
        <>
            {reviews && reviews.length ?
                reviews.map(review => (
                    <div className="review-item" key={review._id}>
                            <StarRating selectedRating={review.rating} />
                            <div className="reviewed-by">Reviewed by <b>{review.userName}</b></div>
                            <div className="review-content">
                                {review.review}
                            </div>
                    </div>
                ))
                :
                <span>This shop is not reviewed by anybody yet.</span> 
            }
        </>
    );

    return (
        <div className="review-list">
            <div className="title">Reviews</div>
            {reviewList}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        reviews: state.review.reviews
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetReviews: () =>
            dispatch(getReviews())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewList);