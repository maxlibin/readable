import React, {Component} from "react";
import propTypes from "prop-types";
import Loading from "./Loading";
import PostForm from "./PostForm";
import "./Posts.css";

class EditPost extends Component {
  componentDidMount() {
    this.props.getPostDetailAction(this.props.match.params.id);
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.editPostAction(e.target, this.props.match.params.id);

    this.props.history.push(`/post/${this.props.match.params.id}`)
  };

  render() {
    let {postDetail, loading} = this.props;
    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <PostForm
            postDetail={postDetail}
            title="Edit this post"
            editPost
            handleOnSubmit={this.handleOnSubmit}
          />
        )}
      </div>
    )
  }
}

EditPost.propTypes = {
  postDetail: propTypes.object,
  getPostDetailAction: propTypes.func,
  loading: propTypes.bool,
};

EditPost.defaultProps = {
  postDetail: {},
  getPostDetailAction: () => false,
  loading: false,
};

export default EditPost;