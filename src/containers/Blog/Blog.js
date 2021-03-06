import React, { Component } from "react";

import classes from "./Blog.Module.css";
import { Route } from "react-router-dom";
import Posts from "./Posts/Posts";

class Blog extends Component {
  render() {
    return (
      <div className={classes.Blog}>
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/new-post">New Post</a>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/" exact render={() => <h1>Home3</h1>} />
      </div>
    );
  }
}

export default Blog;
