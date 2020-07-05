import React from 'react';
import AddReview from './AddReview/AddReview';
import ReviewList from './ReviewList/ReviewList';

import './ShopReview.scss';

const shopReview = () => (
    <div className="shop-review">
        <AddReview />
        <ReviewList />
    </div>
);

export default shopReview;