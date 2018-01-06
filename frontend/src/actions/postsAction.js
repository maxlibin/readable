import {postsConst} from "../constants/postsConst";
import uuidv4 from 'uuid/v4';
import {
  addNewPost,
  doVote,
  deletePost,
  getPosts,
  getPostDetail,
  editPost,
} from "../utils/api";

export const getPostsAction = (category) => (dispatch) => {
  dispatch({
    type: postsConst.GET_ALL_POSTS,
  });

  getPosts(category).then((posts) => {
    dispatch({
      type: postsConst.GET_ALL_POSTS_SUCCESS,
      posts,
    });
  });
};

export const getPostDetailAction = (id) => (dispatch) => {
  dispatch({
    type: postsConst.GET_POST_DETAIL,
  });

  getPostDetail(id).then((post) => {
    dispatch({
      type: postsConst.GET_ALL_POST_DETAIL_SUCCESS,
      post,
    });
  });
};

export const addNewPostAction = (form) => (dispatch) => {
  dispatch({
    type: postsConst.ADD_NEW_POST,
  });

  const {title, body, author, category} = form;
  const options = {
    id: uuidv4(),
    timestamp: Date.now(),
    title: title.value,
    body: body.value,
    author: author.value,
    category: category.value,
  };

  addNewPost(options).then(() => {
    dispatch({
      type: postsConst.ADD_NEW_POST_SUCCESS,
    });
  });
};

export const editPostAction = (form, id) => (dispatch) => {
  const {title, body} = form;
  const option = {
    title: title.value,
    body: body.value,
  };

  editPost(id, option).then(() => {
    dispatch({
      type: postsConst.EDIT_POST_SUCCESS,
    });
  });
};

export const deletePostAction = (id) => (dispatch) => {
  deletePost(id).then(() => {
    dispatch({
      type: postsConst.DELETE_POST,
      id,
    });
  });
};

export const doVoteAction = (id, vote, votePostDetail = false) => (dispatch) => {
  doVote(id, vote).then(() => {
    dispatch({
      type: postsConst.VOTE,
      id,
      vote,
      votePostDetail,
    });
  });
};
