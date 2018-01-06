import React, {Component} from "react";
import Table from "./Table";
import {Link} from "react-router-dom";
import Loading from "./Loading";
import propTypes from "prop-types";
import Notfound from "./Notfound";

import "./Posts.css";

class Posts extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const category = this.props.match.params.category || "all";
    this.props.getPostsAction(category);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.category !== this.props.match.params.category) {
      const category = nextProps.match.params.category || "all";
      this.props.getPostsAction(category);
    }
  }

  render() {
    const {
      posts,
      loading,
      match,
      doVoteAction,
      history,
      deletePostAction,
      categories,
    } = this.props;

    if (
      !loading &&
      match.url !== "/" &&
      !categories.find((category) => category.name === match.params.category)
    ) {
      return <Notfound />
    }

    return (
      <div className="App">
        {loading ? (
          <Loading />
        ) : (
          <div className="posts-wrapper">
            <div className="title">
              <h3>{match.url === "/" ? "All Post" : match.params.category}</h3>
              <Link
                to={{
                  pathname: "/posts/new",
                  search: match.path === "/:category" ? `?category=${match.params.category}` : null
                }}
                className="btn btn-primary"
              >
                Add posts
              </Link>
            </div>
            <Table
              posts={posts}
              history={history}
              vote={doVoteAction}
              delete={deletePostAction}
              category={match.params.category}
            />
          </div>
        )}
      </div>
    )
  }
}

Posts.propTypes = {
  categories: propTypes.array,
  posts: propTypes.array,
  doVoteAction: propTypes.func,
  deletePostAction: propTypes.func,
  getPostsAction: propTypes.func,
  history: propTypes.object,
  loading: propTypes.bool,
  match: propTypes.object,
};

Posts.defaultProps = {
  categories: [],
  posts: [],
  doVoteAction: () => false,
  deletePostAction: () => false,
  getPostsAction: () => false,
  history: {},
  loading: false,
  match: {},
};

export default Posts;