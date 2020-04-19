import React from 'react';
import QuoteCard from './components/QuoteCard'
import axios from 'axios';

const sampleCard = {
  "quote": "Shoplifting is a victimless crime, like punching someone in the dark.",
  "character": "Nelson Muntz",
  "image" : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  "characterDirection" : "Left"
 };


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: sampleCard
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    // Send the request
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes?count=5')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          card: data[0],
        });
    });
  }

  render() {
    return (
      <div className="App">
        <QuoteCard card={this.state.card} />
        <button type="button" onClick={this.getQuote}>Get Quote</button>
      </div>
    );
  }
}
export default App;