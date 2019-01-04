import React, { Component } from 'react';
import ResourceList from "./ResourceList.hooks";

const POSSIBLE_STATES = {
  POSTS: 'POSTS',
  TODOS: 'TODOS',
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
        <ResourceList resource={resource}></ResourceList>
      </div>
    );
  }
}

export default App;
