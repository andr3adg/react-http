import React, { Component } from "react";
import Post from "../../../components/Post/Post";
import classes from "./Posts.Module.css";
import axios from "../../../axios";

class Posts extends Component {
  state = {
    posts: [],
    selectedPost: -1,
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then((response) => {
        let posts = response.data.slice(0, 4);
        let updatedPosts = posts.map((el) => {
          return {
            ...el,
            author: "tulao",
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  }
  postSelectHandler = (id) => {
    this.setState({ selectedPost: id });
  };

  getPosts = () => {
    return this.state.posts.map((post) => {
      return (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          author={post.author}
          clicked={this.postSelectHandler}
          isSelected={post.id === this.state.selectedPost}
        />
      );
    });
  };

  render() {
    return <section className={classes.Posts}>{this.getPosts()}</section>;
  }
}

export default Posts;
