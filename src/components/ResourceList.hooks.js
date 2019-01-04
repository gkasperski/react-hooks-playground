import React, { useState, useEffect } from "react";
import { getResource } from "../resources.service";

const ResourceList = ({ resource }) => {
    const [ resources, setResources ] = useState([]);
    useEffect(() => {(() => getResource(resource).then(data => setResources(data)))()}, [resource]);

    return <div>{ resources.length }</div>;
}

export default ResourceList;