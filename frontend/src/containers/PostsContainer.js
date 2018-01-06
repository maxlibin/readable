import {connect} from "react-redux";
import Posts from "../components/Posts";
import {getPostsAction, doVoteAction, deletePostAction} from "../actions/postsAction";

const PostsContainer = connect(({posts}) => ({
  posts: posts.data,
  loading: posts.loading,
}), {
  getPostsAction,
  doVoteAction,
  deletePostAction,
})(Posts);

export default PostsContainer;