import React, { Component, PropTypes } from "react";

export default class PostList extends Component {
  componentDidMount() {
    this.props.action("GET_POST_LIST");
  }
  render() {
    return <span>"saurabh"</span>;
  }
}
