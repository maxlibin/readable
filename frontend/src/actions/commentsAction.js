import {commentsConst} from "../constants/commentsConst";
import {
  getComments,
  newComment,
  deleteComment,
  editComment,
  voteComment,
} from "../utils/api";

import uuidv4 from 'uuid/v4';

export const getCommentsAction = (category) => (dispatch) => {
  dispatch({
    type: commentsConst.GET_COMMENTS,
  });

  getComments(category).then((comments) => {
    dispatch({
      type: commentsConst.GET_COMMENTS_SUCCESS,
      comments,
    });
  });
};

export const newCommentAction = (content) => (dispatch) => {
  const options = {
    id: uuidv4(),
    timestamp: Date.now(),
    ...content
  };

  newComment(options).then((comment) => {
    dispatch({
      type: commentsConst.ADD_COMMENT_SUCCESS,
      comment,
    });
  });
};

export const deleteCommentAction = (id) => (dispatch) => {
  deleteComment(id).then(() => {
    dispatch({
      type: commentsConst.DELETE_COMMENT_SUCCESS,
      id,
    });
  });
};

export const editCommentAction = (form, id) => (dispatch) => {
  const {body} = form;
  const option = {
    timestamp: Date.now(),
    body: body,
  };

  editComment(id, option).then((data) => {
    dispatch({
      type: commentsConst.EDIT_COMMENT_SUCCESS,
      id,
      body: data.body,
    });
  });
};

export const voteCommentAction = (id, vote) => (dispatch) => {
  const option = {
    option: vote,
  };

  voteComment(id, option).then((data) => {
    dispatch({
      type: commentsConst.VOTE_COMMENT_SUCCESS,
      data
    });
  });
};

