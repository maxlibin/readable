import {connect} from "react-redux";
import Comments from "../components/Comments";
import {
  getCommentsAction,
  newCommentAction,
  deleteCommentAction,
  editCommentAction,
  voteCommentAction,
} from "../actions/commentsAction";

const PostsContainer = connect(({comments}) => ({
  comments: comments.comments,
  loading: comments.loading,
}), {
  getCommentsAction,
  newCommentAction,
  deleteCommentAction,
  editCommentAction,
  voteCommentAction,
})(Comments);

export default PostsContainer;