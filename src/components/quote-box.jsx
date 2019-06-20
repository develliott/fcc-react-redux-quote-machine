import React, { Component } from "react";
import { connect } from "react-redux";

import { FetchQuotes, UpdateQuote } from "../actions/quoteActions";

class QuoteBox extends Component {
  componentDidMount = async () => {
    await this.props.FetchQuotes();
    this.UpdateQuoteHelper();
  };

  UpdateQuoteHelper = () => {
    this.props.UpdateQuote(this.props.quotes);
  };

  render() {
    return (
      <div id="wrapper">
        <div id="quote-box">
          <div id="text">
            {this.props.isFetching ? "Fetching quotes..." : ""}
            <p>{this.props.quote}</p>
          </div>
          <div id="author">{this.props.author}</div>
          <div>
            <button id="new-quote" onClick={this.UpdateQuoteHelper}>
              New Quote
            </button>
          </div>
          <a href="twitter.com/intent/tweet" id="tweet-quote">
            Tweet Quote
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  quotes: state.quoteReducer.quotes,
  isFetching: state.quoteReducer.isFetching,
  error: state.quoteReducer.error,
  quote: state.quoteReducer.quote,
  author: state.quoteReducer.author
});

const mapDispatchToProps = dispatch => ({
  FetchQuotes: () => dispatch(FetchQuotes()),
  UpdateQuote: quotes => dispatch(UpdateQuote(quotes))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteBox);
