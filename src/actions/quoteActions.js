/*
 src/actions/quoteActions.js
*/

import http from "../services/http";
import _ from "lodash";

import {
  FETCH_QUOTES_BEGIN,
  FETCH_QUOTES_SUCCESS,
  FETCH_QUOTES_FAILURE,
  UPDATE_QUOTE
} from "../reducers/quoteReducer";

export const FetchQuotes = () => async dispatch => {
  dispatch(FetchQuotesBeginCreator());
  try {
    const response = await http.get(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    );
    dispatch(FetchQuotesSuccessCreator(response.data.quotes));
  } catch (e) {
    dispatch(FetchQuotesFailureCreator(e));
  }
};

export const UpdateQuote = quotes => dispatch => {
  const randomIndex = _.random(quotes.length);
  const quote_text = quotes[randomIndex].quote;
  const quote_author = quotes[randomIndex].author;
  dispatch(UpdateQuoteCreator(quote_text, quote_author));
};

export const FetchQuotesBeginCreator = () => ({
  type: FETCH_QUOTES_BEGIN
});

export const FetchQuotesSuccessCreator = quotes => ({
  type: FETCH_QUOTES_SUCCESS,
  payload: { quotes }
});

export const FetchQuotesFailureCreator = error => ({
  type: FETCH_QUOTES_FAILURE,
  payload: { error }
});

export const UpdateQuoteCreator = (quote_text, quote_author) => ({
  type: UPDATE_QUOTE,
  payload: { quote_text, quote_author }
});
