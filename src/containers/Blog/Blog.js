import React, { Component } from "react";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import axios from "../../axios";
import "./Blog.css";

class Blog extends Component {
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

  postSelectHandler = (id) => {
    this.setState({ selectedPost: id });
  };

  render() {
    return (
      <div>
        <section className="Posts">{this.getPosts()}</section>
        <section>
          <FullPost
            selectedPost={
              this.state.selectedPost !== -1 &&
              this.state.posts[this.state.selectedPost - 1]
            }
          />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
