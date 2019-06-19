/*
 src/reducers/quoteReducer.js
*/

export const FETCH_QUOTES_BEGIN = "FETCH_QUOTES_BEGIN";
export const FETCH_QUOTES_SUCCESS = "FETCH_QUOTES_SUCCESS";
export const FETCH_QUOTES_FAILURE = "FETCH_QUOTES_FAILURE";
export const UPDATE_QUOTE = "UPDATE_QUOTE";

const initialState = {
  quotes: [],
  isFetching: false,
  error: null,
  quote: "",
  author: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUOTES_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case FETCH_QUOTES_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        isFetching: false,
        quotes: action.payload.quotes
      };
    case FETCH_QUOTES_FAILURE:
      // The request failed. It's done. So set loading to "false".
      // Save the error, so we can display it somewhere.
      // Since it failed, we don't have items to display anymore, so set `items` empty.
      //
      // This is all up to you and your app though:
      // maybe you want to keep the items around!
      // Do whatever seems right for your use case.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        quotes: []
      };
    case UPDATE_QUOTE:
      return {
        // Updates the Quote and Author data.
        ...state,
        quote: action.payload.quote_text,
        author: action.payload.quote_author
      };
    default:
      return state;
  }
};
