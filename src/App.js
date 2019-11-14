import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/repositories')
      .then(({ data }) => {
        this.setState({ data })
      })
  }

  render() {
    const { data } = this.state

    return (
      <div className="App">
        <ul>
          {data.map(item => <li key={item.id}>{item.full_name}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
