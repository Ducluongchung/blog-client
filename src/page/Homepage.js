import React, { useCallback } from "react";
import { Container, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import Header from "../components/Header";
import PostList from "../components/PostList";
import useStyle from "./style";
import CreatePostModal from "../components/CreatePostModel";
import { useDispatch } from "react-redux";
import { showModal } from "../redux/actions";

export default function Homepage() {
  const classes = useStyle();
  const dispatch = useDispatch();

  const openCreatePostModal = React.useCallback(() => {
    console.log("duc");
    dispatch(showModal());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Header />
      <PostList />
      <CreatePostModal />
      <Fab
        color="primary"
        className={classes.fad}
        onClick={openCreatePostModal}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
}
