import {connect} from "react-redux";
import EditPost from "../components/EditPost";
import {getPostDetailAction, addNewPostAction, editPostAction} from "../actions/postsAction";

const NewPostContainer = connect(({posts}) => ({
  postDetail: posts.postDetail.data,
  loading: posts.postDetail.loading,
}), {
  getPostDetailAction,
  addNewPostAction,
  editPostAction,
})(EditPost);

export default NewPostContainer;