const API_URL = "https://jsonplaceholder.typicode.com";

export const getResource = resourceName => fetch(`${API_URL}/${resourceName}`).then(data => data.json()).catch(err => console.err("INVALID RESOURCE"));