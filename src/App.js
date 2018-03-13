import React, { Component } from 'react';
import Header from './components/Header.js';
import Form from './components/form.js';
import './App.css';

class App extends Component {
  state = {
    fields: {}
  };
  onSubmit = (fields) => {
    this.setState({fields});
  };
  render() {
    return (
      <div className="App">
        <Header/>
        <Form onSubmit={fields => this.onSubmit(fields)}/>
        <h2>
        {Object.values(this.state.fields)[0]}
        </h2>
        <img src={Object.values(this.state.fields)[2]} />
        <p>
        {Object.values(this.state.fields)[1]}
        </p>
      </div>
    );
  }
}

export default App;
