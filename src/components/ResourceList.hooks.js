import React from "react";
import { useResources } from "../resources.service";

const ResourceList = ({ resource }) => <ul>{ useResources(resource).map(res => <li key={res.id}>{res.title}</li>) }</ul>;

export default ResourceList;