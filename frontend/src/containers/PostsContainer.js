import {connect} from "react-redux";
import Posts from "../components/Posts";
import {getPostsAction, doVoteAction, deletePostAction} from "../actions/postsAction";

const PostsContainer = connect(({posts, categories}) => ({
  posts: posts.data,
  loading: posts.loading,
  categories: categories,
}), {
  getPostsAction,
  doVoteAction,
  deletePostAction,
})(Posts);

export default PostsContainer;