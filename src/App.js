import React, { Component } from 'react';

//routing components

import axios from 'axios';

//app components

import Slider from './components/Slider';

class App extends Component {

//set initial state
constructor() {
  super();
  this.state = {
    cards: [],
    isLoading: true
  };
}

//fetch data for cards

fetchData = () => {
  axios.get('https://my-json-server.typicode.com/nickoakes/db-for-card-slider/cards')
  .then(response => {
    this.setState({
      isLoading: false,
      cards: response.data
    });
  })
  .catch(error => {
    console.log('An error occurred while getting data for cards');
  });
}

mapCards = (cards) => {
  cards.map(card => card.is_liked)
}

componentDidMount() {
  this.fetchData();
}

componentDidUpdate(prevProps, prevState) {
  if(this.state.cardLiked !== prevState.cardLiked || this.state.cardDisliked !== prevState.cardDisliked) {
    this.fetchData();
  }
}

//handle 'like' functionality
//update state
likeCardState = (e) => {
  e.preventDefault()
  e.stopPropagation()
  let card = e.target.getAttribute('data-custom-id')
  axios.patch('https://my-json-server.typicode.com/nickoakes/db-for-card-slider/cards/' + card, {
    is_liked: true
  }).then((response) => {
    console.log(response.data);
    this.setState(() => ({
        cardDisliked: response.data.id,
        cardLiked: null
    })
    );
  })
}

unlikeCardState = (e) => {
  e.preventDefault()
  e.stopPropagation()
  let card = e.target.getAttribute('data-custom-id')
  axios.patch('https://my-json-server.typicode.com/nickoakes/db-for-card-slider/cards/' + card, {
    is_liked: false
  }).then((response) => {
    console.log(response.data);
    this.setState(() => ({
        cardDisliked: null,
        cardLiked: response.data.id
    })
    );
  })
}

  render() {
    return (
      <div className="wrapper">
      {
              (this.state.isLoading)
              ? <h3>...Loading, please wait</h3>
              :
        <Slider data={this.state.cards} likeCardState={this.likeCardState} unlikeCardState={this.unlikeCardState} />
      }
      </div>
    );
  }
}

export default App;
