import React, { useState } from 'react';

const POSSIBLE_STATES = {
  POSTS: 'POSTS',
  TODOS: 'TODOS',
};

const App = () => {
  const [ resource, setResource ] = useState(POSSIBLE_STATES.POSTS);

  return (
    <div>
      <div>
        <button onClick={() => setResource(POSSIBLE_STATES.POSTS)}>Posts</button>
        <button onClick={() => setResource(POSSIBLE_STATES.TODOS)}>Todos</button>
      </div>
      { resource }
    </div>
  );
}

export default App;
