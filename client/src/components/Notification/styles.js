import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    messageDiv: {
      fontSize: "1.3rem",
      padding: "50px",
      color: "black",
      backgroundColor: "white",
      borderRadius: "7px",
      textAlign: "center",
      width: "30%",
    },

    imageContainer: {
      width: "50%",
      textAlign: "center",
      margin: "0 auto",
    },

    backdrop: {
      zIndex: 100,
    },

    button: {
      color: "#6C63FF",
      margin: "10px",
    },

    image: {
      width: "50%",
      marginBottom: "20px",
    },

    // Loading styles
    loading: {
      fontSize: "1.3rem",
      padding: "50px",
      color: "black",
      backgroundColor: "white",
      borderRadius: "7px",
      textAlign: "center",
    },
  })
);

export default useStyles;
