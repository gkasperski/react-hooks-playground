import React, { Component } from 'react';

const POSSIBLE_STATES = {
  POSTS: 'POSTS',
  TODOS: 'TOODS',
};

class App extends Component {
  state = { resource: POSSIBLE_STATES.POSTS };

  render() {
    const { resource } = this.state;
    return (
      <div>
        <div>
          <button onClick={() => this.setState({ resource: POSSIBLE_STATES.POSTS})}>Posts</button>
          <button onClick={() => this.setState({ resource: POSSIBLE_STATES.TODOS})}>Todos</button>
        </div>
        { resource }
      </div>
    );
  }
}

export default App;
