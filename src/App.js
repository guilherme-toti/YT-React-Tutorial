import React, { Component } from 'react';
import './App.css';

class MyButton extends Component {
  render() {
    return (
      <button
        onClick={() => { this.props.handleClick(this.props.label); }}
      >
        {this.props.label}
      </button>
    );
  }
}

class MyLabel extends Component {
  render() {
    return <p>Cliquei no: {this.props.text}</p>
  }
}


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labelText: '',
    };
  }

  setLabelText = (labelText) => {
    this.setState({ labelText });
  }

  render() {
    return (
      <div className="App">
        <MyLabel text={this.state.labelText} />
        <MyButton handleClick={this.setLabelText} label="Botão 1" />
        <MyButton handleClick={this.setLabelText} label="Botão 2" />
        <MyButton handleClick={this.setLabelText} label="Botão 3" />
        <MyButton handleClick={this.setLabelText} label="Botão 4" />
      </div>
    );
  }
}

export default App;
