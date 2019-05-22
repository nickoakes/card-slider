import React, {Component} from 'react';
import Card from './Card';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

export default class Slider extends Component {

constructor() {
    super();
    this.state = {
        currentIndex: 0,
        translation: 0
    }
}


cardSet = () => {
    let cardSet = this.props.data
    return(
    cardSet.map(card => 
        <Card {...this.props} key={card.id} id={card.id} image_url={card.image_url} title={card.title} subtitle={card.subtitle} text={card.text} href={card.href} is_liked={card.is_liked}/>
        )
    )
}
/*
    logic to control sliding transition

-   translation distance is determined by finding the sum of the card widths, margins and box-shadows
    (1px per card) for a single set of cards.
*/

setWidth = () => {
    const cardMargin = getComputedStyle(document.querySelector('.card')).marginRight.match(/\d+/g)[0];
    const cardWidth = document.querySelector('.card').clientWidth;
    return (this.cardsPerSet() * cardWidth + 2 * this.cardsPerSet() * cardMargin);
};

cardsPerSet = () => {
    return 3;
}

nextSet = () => {
    if(this.state.currentIndex === this.props.data.length - this.cardsPerSet()) {
        this.setState({
            currentIndex: 0,
            translation: 0
        });
    } else {
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + this.cardsPerSet(),
            translation: prevState.translation - (this.setWidth()) - this.cardsPerSet()/3
          }));
        }
    }

prevSet = () => {
    if(this.state.currentIndex === 0) {
        this.setState({
            currentIndex: this.props.data.length - this.cardsPerSet(),
            translation: (this.setWidth() + this.cardsPerSet()/3) * -(Math.floor(this.props.data.length / this.cardsPerSet()) - 1)
        });
    } else {
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - this.cardsPerSet(),
            translation: prevState.translation + (this.setWidth()) + this.cardsPerSet() / 3
          }));
        }
}

render() {
    return(
        <div className="slider-wrapper">
            <div className="slider" style={{transform: 'translateX(' + this.state.translation + 'px)', transition: 'transform ease-out 0.45s'}}>
                {this.cardSet(this.state.currentIndex)}
            </div>
        <div className="arrow-container">
            <LeftArrow prevSet={this.prevSet} />
            <RightArrow nextSet={this.nextSet} />
        </div>
        </div>
    )
}
}