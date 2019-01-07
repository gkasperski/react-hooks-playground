import React, { useReducer } from "react";
import ResourceList from "./ResourceList.hooks";
import { POSSIBLE_STATES } from "../resources.service";

const ACTIONS = {
  RESET: 'RESET',
  CHANGE: 'CHANGE'
};

const RESOURCE_ACTION_CREATORS = {
  reset: () => ({ type: ACTIONS.RESET }),
  change: state => ({ type: ACTIONS.CHANGE, state })
};

const initialState = POSSIBLE_STATES.POSTS;
const resourceReducer = (state, action) => {
  switch(action.type) {
      case ACTIONS.RESET:
        return initialState;
      case ACTIONS.CHANGE:
        return action.state;
      default:
        return state;
  }
}

const App = () => {
  const [ resource, dispatch ] = useReducer(resourceReducer, initialState);
  
  return (
    <div>
      <div>
        <button onClick={() => dispatch(RESOURCE_ACTION_CREATORS.change((POSSIBLE_STATES.POSTS)))}>
          Posts
        </button>
        <button onClick={() => dispatch(RESOURCE_ACTION_CREATORS.change((POSSIBLE_STATES.TODOS)))}>
          Todos
        </button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
