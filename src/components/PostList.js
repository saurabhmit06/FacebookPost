import React, { Component, PropTypes } from "react";

export default class PostList extends Component {
  state = { postId: 0 };
  componentDidMount() {
    this.props.action("GET_POST_LIST");
  }
  handleRowClick(item) {
    this.setState({ postId: item.id });
    this.props.action("COMMNET_LIST", { postId: item.id });
  }
  render() {
    return !this.state.postId ? (
      <div>
        <div className="flexContainer title">
          <div>ID</div>
          <div>Title</div>
          <div>Posted By</div>
        </div>
        <div>
          {this.props.value.postList.map(item => {
            return (
              <div className="flexContainerList">
                <div
                  onClick={() => {
                    this.handleRowClick(item);
                  }}
                >
                  {item.id}
                </div>
                <div>{item.title}</div>
                <div>{item.userId}</div>
              </div>
            );
          })}
        </div>
      </div>
    ) : (
      <div className="flexContainer">
        <div>Title</div>
        <div>Body</div>
        <div>Posted By</div>
      </div>
    );
  }
}
