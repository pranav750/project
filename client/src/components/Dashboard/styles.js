import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      width: "70%",
      margin: "100px auto",
      padding: "50px",
      textAlign: "center",
    },

    posts: {
      display: "flex",
      flexWrap: "wrap",
      width: "100%",
      justifyContent: "space-around",
    },

    post: {
      width: "100%",
      margin: "20px",
    },

    bookContainer: {
      display: "flex",
      width: "100%",
      padding: "20px",
    },

    bookItem: {
      width: "50%",
      padding: "10px",
      margin: "auto",
      textAlign: "center",
    },

    likeIcon: {
      padding: "2px",
      "&:hover": {
        cursor: "pointer",
      },
    },
  })
);

export default useStyles;
