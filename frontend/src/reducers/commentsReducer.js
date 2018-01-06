import {commentsConst} from "../constants/commentsConst";

const initialState = {
  loading: false,
  comments: [],
  newComment: {},
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case commentsConst.GET_COMMENTS:
      return {
        ...state,
        loading: true,
      };

    case commentsConst.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.comments,
        loading: false,
      };

    case commentsConst.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [...state.comments, action.comment],
        newComment: action.comment,
      };

    case commentsConst.DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: state.comments.filter((comment) => comment.id !== action.id),
      };

    case commentsConst.EDIT_COMMENT_SUCCESS:
      return {
        ...state,
        comments: state.comments.map((comment) => ({
          ...comment,
          body: comment.id === action.id ? action.body : comment.body,
        })),
      };

    case commentsConst.VOTE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: state.comments.map((comment) => ({
          ...comment,
          voteScore: comment.id === action.data.id ? action.data.voteScore : comment.voteScore,
        })),
      };
    default:
      return state;
  }
};

export default commentsReducer;
