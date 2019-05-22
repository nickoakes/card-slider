import React from 'react';

const Card = (props) => {

let heartDisplay;
if(props.is_liked === true) {
    heartDisplay = 
        <img src="./filled-heart.png" alt="filled-heart" width="20px" className="heart" id="filled-heart" data-custom-id={props.id} onClick={props.unlikeCardState} />
} else {
    heartDisplay = 
        <img src="./unfilled-heart.png" alt="unfilled-heart" width="20px" className="heart" id="unfilled-heart" data-custom-id={props.id} onClick={props.likeCardState}/>
}

return(
<a href={props.href} target="_blank">
<div className="card">
    <div className="card-img">
        <img src={props.image_url} alt={props.title} width="308px" height="149px" />
    </div>
    <div className="card-title">
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
    </div>
    <div className="card-text">
        <p dangerouslySetInnerHTML={{__html: props.text}}></p>
    </div>
    <div className="card-heart">
        {heartDisplay}
    </div>
    </div>
</a>
)
}

export default Card;