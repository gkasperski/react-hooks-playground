import React, { useState } from "react";
import ResourceList from "./ResourceList.hooks";
import { POSSIBLE_STATES } from "../resources.service";

const App = () => {
  const [resource, setResource] = useState(POSSIBLE_STATES.POSTS);
  
  return (
    <div>
      <div>
        <button onClick={() => setResource(POSSIBLE_STATES.POSTS)}>
          Posts
        </button>
        <button onClick={() => setResource(POSSIBLE_STATES.TODOS)}>
          Todos
        </button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
