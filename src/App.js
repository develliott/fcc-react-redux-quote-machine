import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";
import { simpleAction } from "./actions/simpleAction";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  submitSimpleAction: () => dispatch(simpleAction())
});

class App extends Component {
  handleSimpleAction = event => {
    this.props.submitSimpleAction();
  };

  render() {
    return (
      <div className="App">
        <pre>{JSON.stringify(this.props)}</pre>
        <button onClick={this.handleSimpleAction}>Test action</button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
