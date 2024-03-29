import React from "react";
import './Buttons.css'
import {Link} from "react-router-dom";

const STYLES = [
    'btn--primary',
    'btn--outline',
    'btn--common',
    'btn--common-2',
    'btn--circle',
    'btn--test',
    'btn--service',
    'btn--grey',
    'btn--long',
    'btn--services',
    'btn--services-grey',
    'btn--contact'
]

export const Button = ({
                           children,
                           type,
                           onClick,
                           buttonStyle,
                           buttonSize,
                           buttonIcon,
                           path,
                           target
                       }) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <Link to={path} target={target}>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
                <i className={buttonIcon}/>
            </button>
        </Link>
)
}

const SIZES = [
    'btn--medium',
    'btn--large'
]
