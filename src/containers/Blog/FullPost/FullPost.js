import axios from "../../../axios";
import React, { Component } from "react";

import "./FullPost.css";

class FullPost extends Component {
  deletePostHandler = () => {
    axios.delete("/posts/" + this.props.selectedPost.id).then((response) => {
      console.log("response: ", response);
    });
  };

  render() {
    let { selectedPost } = this.props;
    let post = <p>Please select a Post!</p>;
    post = (
      <div className="FullPost">
        <h1>{selectedPost ? selectedPost.title : "Title"}</h1>
        <p>{selectedPost ? selectedPost.body : "Content"}</p>
        <div className="Edit">
          <button onClick={this.deletePostHandler} className="Delete">
            Delete
          </button>
        </div>
      </div>
    );
    return post;
  }
}

export default FullPost;
