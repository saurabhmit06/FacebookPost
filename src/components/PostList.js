import React, { Component, PropTypes } from "react";

export default class PostList extends Component {
  state = { postId: 0 };
  componentDidMount() {
    this.props.action("GET_POST_LIST");
  }
  handleRowClick(item) {
    this.setState({ post: item });
    this.props.action("COMMNET_LIST", { postId: item.id });
  }
  buttonHandler = () => {
    this.setState({ post: null });
  };
  getUser(id) {
    return this.props.value.userList.find(item => item.id === id).name;
  }
  render() {
    return !this.state.post ? (
      <div>
        <div>
          <h2>Post List</h2>
        </div>
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
                <div>{this.getUser(item.userId)}</div>
              </div>
            );
          })}
        </div>
      </div>
    ) : (
      <div className="flexPostDetail">
        <div>
          <button className="botton" onClick={this.buttonHandler} value="Back">
            &lt;
          </button>
          <h2>Post Detail</h2>
        </div>
        <div>
          <strong>Title: </strong>
          <div>{this.state.post.title}</div>
        </div>
        <div>
          <strong>Body</strong>
          <div>{this.state.post.body}</div>
        </div>
        <div>
          <strong>Posted By</strong>
          <div>{this.getUser(this.state.post.userId)}</div>
        </div>
        <div className="flexContainer title">
          <div>ID</div>
          <div>Title</div>
          <div>Body</div>
        </div>
        <div className="commentTable">
          {this.props.value.selectedComment.map(item => {
            return (
              <div className="flexContainerList">
                <div>{item.id}</div>
                <div>{item.name}</div>
                <div>{item.body}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
