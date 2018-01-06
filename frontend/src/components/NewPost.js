import React, {Component} from "react";
import propTypes from "prop-types";
import PostForm from "./PostForm";
import "./Posts.css";

class NewPost extends Component {
  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.addNewPostAction(e.target);

    this.props.history.push(
      this.props.location.search ? `/${this.props.location.search.replace("?category=", "")}` :
      "/"
    )
  };

  render() {
    let {categories, location} = this.props;
    if (location.search) {
      location = location.search.replace("?category=", "");
    }

    return (
      <div className="App">
        <PostForm
          title="Add new post"
          categories={categories}
          location={location}
          handleOnSubmit={this.handleOnSubmit}
        />
      </div>
    )
  }
};

NewPost.propTypes = {
  categories: propTypes.array,
  location: propTypes.object,
};

NewPost.defaultProps = {
  categories: [],
  location: {},
};

export default NewPost;