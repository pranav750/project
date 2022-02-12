import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      width: "50%",
      margin: "100px auto",
      padding: "70px",
      textAlign: "center",
    },

    buttonContainer: {
      display: "flex",
      width: "35%",
      justifyContent: "space-around",
      margin: "20px auto",
      "@media (max-width: 1050px)": {
        width: "75%",
      },
    },
  })
);

export default useStyles;
