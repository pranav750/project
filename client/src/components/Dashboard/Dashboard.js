import { useEffect } from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import openSocket from "socket.io-client";
import { LOGOUT } from "../../store/constants/constants";
import { getTopContent, refreshTopContent } from "../../store/actions/content";
import Book from "./Book";
import useStyles from "./styles";

const socket = openSocket("http://localhost:8001");

const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const userID = useSelector((state) => state.user.userID);
  const books = useSelector((state) => state.content.books);

  socket.on("like", (data) => {
    dispatch(
      refreshTopContent({
        book: data.payload,
        books,
      })
    );
  });

  socket.on("unlike", (data) => {
    dispatch(
      refreshTopContent({
        book: data.payload,
        books,
      })
    );
  });

  useEffect(() => {
    dispatch(getTopContent());
  }, []);

  return (
    <Paper className={classes.paper} elevation={3}>
      <Typography variant="h5" gutterBottom>
        Dashboard: {userID}
      </Typography>
      <Grid className={classes.posts}>
        {books.length === 0 ? (
          <Typography variant="subtitle1" gutterBottom>
            No Books available.
          </Typography>
        ) : (
          books.map((book) => (
            <Book
              key={book._id}
              id={book._id}
              title={book.title}
              story={book.story}
              likes={book.likes}
            />
          ))
        )}
      </Grid>
      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={() => {
          dispatch({ type: LOGOUT });
        }}
      >
        Log Out
      </Button>
    </Paper>
  );
};

export default Dashboard;
