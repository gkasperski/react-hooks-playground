import { useState, useEffect } from "react";

const API_URL = "https://jsonplaceholder.typicode.com";

export const POSSIBLE_STATES = {
  POSTS: "POSTS",
  TODOS: "TODOS"
};
export const getResource = resourceName => fetch(`${API_URL}/${resourceName}`).then(data => data.json()).catch(err => console.err("INVALID RESOURCE"));
export const useResources = resource => {
  const [ resources, setResources ] = useState([]);
  useEffect(() => {(() => getResource(resource).then(data => setResources(data)))()}, [resource]);

  return resources;
};