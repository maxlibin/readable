import {connect} from "react-redux";
import NewPost from "../components/NewPost";
import {getCategoriesAction} from "../actions/categoriesAction";
import {addNewPostAction} from "../actions/postsAction";

const NewPostContainer = connect(({categories}) => ({
  categories,
}), {
  getCategoriesAction,
  addNewPostAction,
})(NewPost);

export default NewPostContainer;