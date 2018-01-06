import {connect} from "react-redux";
import Post from "../components/Post";
import {getPostDetailAction, doVoteAction, deletePostAction} from "../actions/postsAction";

const PostContainer = connect(({posts}) => ({
  postDetail: posts.postDetail.data,
  loading: posts.postDetail.loading,
}), {
  getPostDetailAction,
  doVoteAction,
  deletePostAction
})(Post);

export default PostContainer;