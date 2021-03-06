import React, { useState } from "react";
import { Button, Modal, TextareaAutosize, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { modalState$ } from "../../redux/selectors";
import { hideModal } from "../../redux/actions";
import useStyle from "./style";
import FileBase64 from "react-file-base64";
import * as actions from "../../redux/actions";

export default function CreatePostModal() {
  const [data, setData] = useState({
    title: "",
    content: "",
    attachment: "",
  });
  const dispatch = useDispatch();

  const classes = useStyle();
  const { isShow } = useSelector(modalState$);

  const handleCloseModal = React.useCallback(() => {
    dispatch(hideModal());
    setData({
      title: "",
      content: "",
      attachment: "",
    });
  }, [dispatch]);

  const handleCreatePost = () => {
    dispatch(actions.createPost.createPostRequest(data));
    handleCloseModal();
  };

  const body = (
    <div className={classes.paper} id="simple-modal-title">
      <h2>Create New Post</h2>
      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          className={classes.title}
          required
          label="title"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />
        <TextareaAutosize
          className={classes.textArea}
          rowsMin={10}
          rowsMax={15}
          placeholder="...Content"
          value={data.content}
          onChange={(e) => {
            setData({ ...data, content: e.target.value });
          }}
        />
        <FileBase64
          accept="image/"
          multiple={false}
          type="file"
          value={data.attachment}
          onDone={({ base64 }) => {
            setData({ ...data, attachment: base64 });
          }}
        />
        <div className={classes.footer}>
          <Button
            variant="container"
            color="primary"
            component="span"
            fullWidth
            onClick={handleCreatePost}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <Modal open={isShow} onClose={handleCloseModal}>
        {body}
      </Modal>
    </div>
  );
}
