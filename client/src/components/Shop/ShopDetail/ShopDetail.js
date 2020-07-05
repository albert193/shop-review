import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faAddressCard, 
    faPhone, 
    faEnvelopeSquare, 
    faGlobe, 
    faCheckCircle,
    faShoppingBag 
} from '@fortawesome/free-solid-svg-icons';

import './ShopDetail.scss';

const shopDetail = () => (
    <div className="shop-detail">
        <div className="image-container" />
        <div className="information-container">
            <div className="name">Shop 1234</div>
            <div className="title">Contact</div>
            <div>
                <div className="information">
                    <FontAwesomeIcon icon={faAddressCard} className="information-icon" />
                    <div className="address-container">
                        <span>Ap #285-7193 Ullamcorper Avenue</span>
                        <span>Amesbury HI 93373</span>
                    </div>
                </div>
                <div className="information">
                    <FontAwesomeIcon icon={faPhone} className="information-icon" />
                    <span>(123) 456-78910</span>
                </div>
                <div className="information">
                    <FontAwesomeIcon icon={faEnvelopeSquare} className="information-icon" />
                    <a href="mailto:email@email.com">email@email.com</a>
                </div>
                <div className="information">
                    <FontAwesomeIcon icon={faGlobe} className="information-icon" />
                    <a href="//www.gooogle.com" rel="noopener noreferrer" target="_blank">www.google.com</a>
                </div>
            </div>
            <div className="title">Services</div>
            <div>
                <div className="information">
                    <FontAwesomeIcon icon={faCheckCircle} className="information-icon" />
                    <span>Accept credit card</span>
                </div>
                <div className="information">
                    <FontAwesomeIcon icon={faCheckCircle} className="information-icon" />
                    <span>Pet friendly place</span>
                </div>
            </div>
            <div className="title">Opening hours</div>
            <div className="opening-hours-container">
                <FontAwesomeIcon icon={faShoppingBag} className="shopping-bag-icon" />
                <div className="days-container">
                    <div className="days">
                        <span>Monday - Saturday</span>
                        <span>10:00 - 21:00</span>
                    </div>
                    <div className="days">
                        <span>Sunday</span>
                        <span>10:00 - 19:00</span>
                    </div>
                </div>
            </div>
            <div className="title">About Us</div>
            <div className="about-us-container">
                We are a European chain of discount shops offering apparel for the entire family and 
                household products at the lowest prices. We have been growing dynamically in Poland for 
                more than a dozen years. We have become the most popular seller of children’s clothing and 
                a leading supplier of decorative products. We owe our success to our people and their involvement.
            </div>
        </div>
    </div>
);

export default shopDetail;