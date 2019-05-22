import React from 'react';

const LeftArrow = (props) => {
    return(
            <img src='./left-arrow.png' alt="left-arrow" width="12px" className="arrow" onClick={props.prevSet} />
    )
}

export default LeftArrow;