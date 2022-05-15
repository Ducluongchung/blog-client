import React from "react";
import {
  Typography,
  Avatar,
  Card,
  CardHeader,
  IconButton,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoritesIcon from "@material-ui/icons/Favorite";

export default function Post({ post }) {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar>A</Avatar>}
        title="this is title"
        subheader="Apr 30, 2021"
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardMedia image="" title="title">
        CardMedia
      </CardMedia>
      <CardContent>
        <Typography variant="h5" color="textPrimary">
          This its Post
        </Typography>
        <Typography variant="body2" component="p" color="textPrimary">
          This its Content Post
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <FavoritesIcon component="span" color="textSecondary">
            10 like
          </FavoritesIcon>
        </IconButton>
      </CardActions>
    </Card>
  );
}
