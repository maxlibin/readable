import React, {Component, Fragment} from "react";
import propTypes from "prop-types";
import moment from "moment";
import CommentForm from "./CommentForm";
import "./Comments.css";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      id: "",
    }
  }
  componentDidMount() {
    const postId = this.props.postId;
    this.props.getCommentsAction(postId);
  }

  onHandleEdit = (e, id) => {
    e.preventDefault();
    this.setState({
      edit: true,
      id: id,
    });
  };

  handleCloseEdit = () => {
    this.setState({
      edit: false,
      id: "",
    });
  };

  render() {
    const {comments} = this.props;
    return (
      <div className="Comments">
        <div className="commentTitle">
          <h5>Comments:</h5>
          <small className="commentsCount"> total {comments.length} {comments.length === 1 ? "comment" : "comments"}</small>
        </div>
        {comments.length === 0 && (
          <p>There were no comment in this post, please add one.</p>
        )}
        {comments.map((comment) => {
          return (
            <div
              key={comment.id}
              className="comment-box"
            >
              <div className="comment-box-wrapper">
                <div className="commentVote">
                <span
                  className="arrow up"
                  onClick={() => this.props.voteCommentAction(comment.id, "upVote")}
                />
                  <span className="score">{comment.voteScore}</span>
                  <span
                    className="arrow down"
                    onClick={() => this.props.voteCommentAction(comment.id, "downVote")}
                  />
                </div>
                <div className="commentContent">
                  {this.state.edit && this.state.id === comment.id ? (
                    <CommentForm
                      editing
                      author={comment.author}
                      body={comment.body}
                      id={comment.id}
                      closeEdit={this.handleCloseEdit}
                      onSubmit={this.props.editCommentAction}
                    />
                  ) : (
                    <Fragment>
                      <p>{comment.body}</p>
                      <small>Commented by <strong>{comment.author}</strong> on {moment(comment.timestamp).format("DD MMM YYYY")}</small>
                    </Fragment>
                  )}
                  <button
                    className="editBtnNone"
                    onClick={(e) => {this.onHandleEdit(e, comment.id)}}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 21.589 21.589">
                      <path d="M18.622 8.371l-.545-1.295s1.268-2.861 1.156-2.971l-1.679-1.639c-.116-.113-2.978 1.193-2.978 1.193l-1.32-.533S12.09.226 11.93.226H9.561c-.165 0-1.244 2.906-1.244 2.906l-1.318.535S4.077 2.425 3.965 2.536L2.289 4.177c-.116.113 1.218 2.916 1.218 2.916l-.545 1.293S0 9.527 0 9.681v2.322c0 .162 2.969 1.219 2.969 1.219l.545 1.291s-1.268 2.859-1.157 2.969l1.678 1.643c.114.111 2.977-1.195 2.977-1.195l1.321.535s1.166 2.898 1.327 2.898h2.369c.164 0 1.244-2.906 1.244-2.906l1.322-.535s2.916 1.242 3.029 1.133l1.678-1.641c.117-.115-1.22-2.916-1.22-2.916l.544-1.293s2.963-1.143 2.963-1.299v-2.32c.001-.161-2.967-1.215-2.967-1.215zm-4.366 2.423c0 1.867-1.553 3.387-3.461 3.387-1.906 0-3.461-1.52-3.461-3.387s1.555-3.385 3.461-3.385c1.909.001 3.461 1.518 3.461 3.385z"/>
                    </svg> Edit
                  </button>
                  <button
                    className="editBtnNone"
                    onClick={() => {this.props.deleteCommentAction(comment.id)}}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 459 459">
                      <path d="M76.5 408c0 28.05 22.95 51 51 51h204c28.05 0 51-22.95 51-51V102h-306v306zM408 25.5h-89.25L293.25 0h-127.5l-25.5 25.5H51v51h357v-51z" />
                    </svg> Delete
                  </button>
                </div>
              </div>
            </div>
          )
        })}
        <CommentForm
          parentId={this.props.postId}
          onSubmit={this.props.newCommentAction}
        />
      </div>
    )
  }
}

Posts.propTypes = {
  comments: propTypes.array,
  newCommentAction: propTypes.func.isRequired,
  deleteCommentAction: propTypes.func.isRequired,
};

Posts.defaultProps = {
  comments: [],
};

export default Posts;