import moment from "moment";
import {postsConst} from "../constants/postsConst";

const initialState = {
  loading: false,
  data: [],
  postDetail: {
    loading: false,
    data: {},
  },
};

const mapPosts = (posts) => posts.map((post) => ({
  id: post.id,
  title: post.title,
  author: post.author,
  commentCount: post.commentCount,
  voteScore: post.voteScore,
  delete: post.delete,
  category: post.category,
  date: moment(post.timestamp).format("DD MMM YYYY"),
}));

const updateVote = (posts, id, option) => posts.map((post) => ({
    ...post,
    voteScore: (post.id === id) ? option === "upVote" ? post.voteScore+1 : post.voteScore-1 : post.voteScore,
}));

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case postsConst.ADD_NEW_POST:
      return {
        ...state,
      };

    case postsConst.ADD_NEW_POST_SUCCESS:
      return {
        ...state,
      };

    case postsConst.EDIT_POST_SUCCESS:
      return {
        ...state,
      };

    case postsConst.DELETE_POST:
      return {
        ...state,
        data: state.data.filter((post) => post.id !== action.id),
        postDetail: {},
      };

    case postsConst.GET_ALL_POSTS:
      return {
        ...state,
        loading: true,
      };

    case postsConst.GET_ALL_POSTS_SUCCESS:
      return {
        ...state,
        data: mapPosts(action.posts),
        loading: false,
      };

    case postsConst.VOTE: {
      if (action.votePostDetail) {
        return {
          ...state,
          postDetail: {
            ...state.postDetail,
            data: {
              ...state.postDetail.data,
              voteScore: action.vote === "upVote" ? state.postDetail.data.voteScore+1 : state.postDetail.data.voteScore-1,
            }
          }
        };
      } else {
        return {
          ...state,
          data: updateVote(state.data, action.id, action.vote),
          loading: false,
        };
      }
    }

    case postsConst.GET_POST_DETAIL:
      return {
        ...state,
        postDetail: {
          ...state.postDetail,
          loading: true,
        }
      };

    case postsConst.GET_ALL_POST_DETAIL_SUCCESS:
      return {
        ...state,
        postDetail: {
          data: action.post,
          loading: false,
        }
      };

    default:
      return state;
  }
};

export default postsReducer;
