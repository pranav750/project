import { Paper, Grid, Typography } from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useDispatch, useSelector } from "react-redux";
import { likeBook, unlikeBook } from "../../store/actions/content";
import useStyles from "./styles";

const Book = ({ id, title, story, likes }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const userID = useSelector((state) => state.user.userID);

  const hasUserLiked = likes.includes(userID);

  const likeHandler = () => {
    dispatch(
      likeBook({
        userID,
        bookID: id,
      })
    );
  };

  const unlikeHandler = () => {
    dispatch(
      unlikeBook({
        userID,
        bookID: id,
      })
    );
  };

  return (
    <Grid className={classes.post}>
      <Paper className={classes.bookContainer} elevation={1}>
        <div className={classes.bookItem}>
          <Typography variant="body1" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {story}
          </Typography>
        </div>
        <div className={classes.bookItem}>
          <Typography variant="body2" gutterBottom>
            {likes.length} likes
          </Typography>
          {hasUserLiked ? (
            <ThumbUpIcon className={classes.likeIcon} onClick={unlikeHandler} />
          ) : (
            <ThumbUpOutlinedIcon
              className={classes.likeIcon}
              onClick={likeHandler}
            />
          )}
        </div>
      </Paper>
    </Grid>
  );
};

export default Book;
