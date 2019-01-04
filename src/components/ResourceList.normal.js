import React, { Component } from "react";
import { getResource } from "../resources.service";

class ResourceList extends Component {

  state = { resources: [] };

  async componentDidMount() {
    const { resource } = this.props;
    this.updateResources(resource);
  }

  componentDidUpdate(prevProps) {
    const { resource } = this.props;
    if (prevProps.resource !== resource) {
      this.updateResources(resource);
    }
  }

  updateResources = resource => getResource(resource).then(data => this.setState({resources: data}));
  

  render() {
    const { resources } = this.state;
    return (
      <div>{ resources.length }</div>
    )
  }
}

export default ResourceList;