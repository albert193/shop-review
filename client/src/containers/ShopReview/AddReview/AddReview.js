import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';

import StarRating from '../../../components/UI/StarRating/StarRating';
import Input from '../../../components/UI/Input/Input';
import { addReview } from '../../../store/actions/review';

import './AddReview.scss';

const required = value => value ? undefined : 'This field is required!';
const AddReview = ({ handleSubmit, change, onAddReview }) => {
    const handleAddReview = values => onAddReview(values);

    return (
        <div className="add-review">
            <div className="title">Add your review</div>
            <div className="how-would-you-rate">How would you rate this product?</div>
            <form onSubmit={handleSubmit(handleAddReview)}>
                <Field 
                    name="rating" 
                    component={StarRating}
                    editable
                    change={change}
                />
                <Field 
                    name="userName" 
                    component={Input}
                    label="Your name"
                    type="input"
                    validate={[required]}  
                />
                <Field 
                    name="review" 
                    component={Input}
                    label="Your review"
                    type="textarea"
                    validate={[required]}     
                />
                <button type="submit" className="add-review-btn">
                    Add review
                </button>
            </form>
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        onAddReview: reviewData => dispatch(addReview(reviewData))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(reduxForm({
    form: 'add-review',
    initialValues: { rating: 1 }
})(AddReview));
