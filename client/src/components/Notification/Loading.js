import { Backdrop, CircularProgress, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import useStyles from "./styles";

const Loading = () => {
  const classes = useStyles();
  const loading = useSelector((state) => state.user.loading);

  return (
    <Backdrop className={classes.backdrop} open={loading}>
      <div className={classes.loading}>
        <CircularProgress style={{ color: "black" }} />
        <Typography variant="subtitle1">Loading...</Typography>
      </div>
    </Backdrop>
  );
};

export default Loading;
