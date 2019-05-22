import React from 'react';

const RightArrow = (props) => {
    return(
            <img src='./right-arrow.png' alt="right-arrow" width="12px" className="arrow" onClick={props.nextSet} />
    )
}

export default RightArrow;