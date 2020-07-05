import React from 'react';
import classNames from 'classnames';

import './Input.scss';

const input = ({ input, meta: { touched, invalid, error }, label, type, required }) => {
    let inputElement = null;

    switch (type) {
        case ('input'):
            inputElement = <input
                className={classNames({ 'invalid': invalid && touched })}
                {...input}
                required={required}
                type="input"
            />;
            break;
        case ('textarea'):
            inputElement = <textarea
                className={classNames({ 'invalid': invalid && touched })}
                rows="4"
                {...input}
                required={required}
                type="textarea"
            />;
            break;
        default:
            inputElement = <input
                className={classNames({ 'invalid': invalid && touched })}
                {...input}
                required={required}
                type={type}
            />;
    }

    return (
        <div className="input">
            <label>{required && <span className="required-star">* </span>}{label}</label>
            {inputElement}
            {invalid && touched && <span className="error-message">{error}</span>}
        </div>
    );
};

export default input;