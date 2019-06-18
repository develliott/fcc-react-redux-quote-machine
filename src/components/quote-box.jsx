import React, { Component } from "react";
import http from "../services/http";

import _ from "lodash";

export default class QuoteBox extends Component {
  state = {
    quotes: [],
    quote: "",
    author: "",
    isFetching: false
  };

  componentDidMount = async () => {
    try {
      this.setState({
        isFetching: true
      });

      const response = await http.get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      );
      const quotes = response.data.quotes;

      this.setState({
        quotes,
        isFetching: false
      });

      this.populateRandomQuote();
    } catch (e) {
      console.log(e);
      this.setState({
        quotes: [],
        isFetching: false
      });
    }
  };

  populateRandomQuote = () => {
    const randomQuote = this.state.quotes[_.random(this.state.quotes.length)];
    this.setState({ quote: randomQuote.quote, author: randomQuote.author });
  };

  render() {
    return (
      <div id="wrapper">
        <div id="quote-box">
          <div id="text">
            {this.state.isFetching ? "Fetching quotes..." : ""}
            <p>{this.state.quote}</p>
          </div>
          <div id="author">{this.state.author}</div>
          <div id="new-quote" onClick={this.populateRandomQuote}>
            <button>New Quote</button>
          </div>
          <a href="twitter.com/intent/tweet" id="tweet-quote">
            Tweet Quote
          </a>
        </div>
      </div>
    );
  }
}
