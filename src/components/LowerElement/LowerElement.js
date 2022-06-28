import './LowerElement.css'
import {Button} from "../Buttons";
import React from "react";


function LowerElement({icon}) {
    return (
        // <button>
        //     <div className="element">
        //         <i className={icon}/>
        //
        //     </div>
        // </button>
        <Button buttonIcon={icon} buttonStyle={'btn--circle'}/>
    )
}

export default LowerElement;