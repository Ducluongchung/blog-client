import { createActions, createAction } from "redux-actions";

export const getType = (reduxActions) => {
  return reduxActions.type;
};

export const getPosts = createActions({
  getPostsRequest: undefined,
  getPostSuccess: (payload) => payload,
  getPostFailure: (error) => error,
});

export const showModal = createAction("SHOW_CREATE_POST_MODAL");
export const hideModal = createAction("HIDE_CREATE_POST_MODAL");
