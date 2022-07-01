import React from "react";
import './Buttons.css'

const STYLES = [
    'btn--primary',
    'btn--outline',
    'btn--common',
    'btn--circle',
    'btn--service',
    'btn--grey',
    'btn--long'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
                           children,
                           type,
                           onClick,
                           buttonStyle,
                           buttonSize,
                           buttonIcon
                       }) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
            <i className={buttonIcon}/>
        </button>
    )
}