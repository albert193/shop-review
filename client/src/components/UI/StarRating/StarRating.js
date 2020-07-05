import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import './StarRating.scss';

const StarRating = props => {
    const { editable, change, input, selectedRating } = props;
    const isSelected = rating => (editable && input.value === rating) || (!editable && selectedRating === rating);

    return (
        <div className="star-rating">
            {[1, 2, 3, 4, 5].map(rating => (
                <FontAwesomeIcon
                    key={rating} 
                    icon={faStar} 
                    className={classNames('star-icon', { selected: isSelected(rating), editable: !!editable })} 
                    onClick={!!editable ? () => change(input.name, rating) : null}
                />
            ))}
        </div>
    );
};

export default StarRating;