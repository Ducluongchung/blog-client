import { INIT_STATE } from "../../constant";
import {
  createPost,
  getPosts,
  getType,
  updatePost,
  deletePost,
} from "../actions";

export default function postsReducer(state = INIT_STATE.posts, action) {
  switch (action.type) {
    case getType(getPosts.getPostsRequest()):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getPosts.getPostSuccess()):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getPosts.getPostFailure()):
      return {
        ...state,
        isLoading: false,
      };
    case getType(createPost.createPostSuccess()):
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case getType(updatePost.updatePostRequest()):
      return {
        ...state,
        data: state.data.map((post) =>
          post._id === action.payload._id ? action.payload : post,
        ),
      };
    case getType(deletePost.deletePostRequest()):
      return {
        ...state,
        data: state.data.filter((post) => post._id !== action.payload._id),
      };
    default:
      return state;
  }
}
