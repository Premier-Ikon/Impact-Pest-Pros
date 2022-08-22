import React from 'react';
import './CustomerReview.css'

export const CustomerReview = ({name, review}) => {
    return (
        <div className="review-element-container">
            <div>
                <p className="review-text">{review}</p>
            </div>
            <div className="lower-section-review">
                <div className="text-container">
                    <p>{name}</p>
                </div>
                <div className="star-container">
                    <i className="fa-solid fa-star"/>
                    <i className="fa-solid fa-star"/>
                    <i className="fa-solid fa-star"/>
                    <i className="fa-solid fa-star"/>
                    <i className="fa-solid fa-star"/>
                </div>
            </div>
        </div>
    );
}
