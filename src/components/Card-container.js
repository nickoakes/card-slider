import React from 'react';

import Card from './Card';

let CardContainer = (props) => {
    
    let cardData = props.data.map(card => 
    <Card {...props} key={card.id} id={card.id} image_url={card.image_url} title={card.title} subtitle={card.subtitle} text={card.text} href={card.href} is_liked={card.is_liked}/>
    )

    return(
        <div className="card-container">
            {cardData}
        </div>
    )
}

export default CardContainer;