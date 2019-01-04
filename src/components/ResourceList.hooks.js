import React, { useState, useEffect } from "react";
import { getResource } from "../resources.service";

const ResourceList = ({ resource }) => {
    const [ resources, setResources ] = useState([]);
    const updateResources = resource => getResource(resource).then(data => setResources(data));

    useEffect(() => {
      updateResources(resource);
    }, [resource]);
  
    return <div>{ resources.length}</div>;
    
}

export default ResourceList;