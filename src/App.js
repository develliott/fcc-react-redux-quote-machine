import React, { Component } from "react";
import "./App.css";

import QuoteBox from "./components/quote-box";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <QuoteBox />
      </div>
    );
  }
}
