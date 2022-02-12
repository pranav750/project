import { Backdrop, Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RESET_ERROR, RESET_SUCCESS } from "../../store/constants/constants";
import useStyles from "./styles";

const Message = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const error = useSelector((state) => state.user.error);
  const success = useSelector((state) => state.user.success);

  const whiteBackground = { backgroundColor: "white" };

  const clickHandler = () => {
    if (error) dispatch({ type: RESET_ERROR });
    else if (success) dispatch({ type: RESET_SUCCESS });
  };

  return (
    <Backdrop
      className={classes.backdrop}
      open={error || success ? true : false}
    >
      <div className={classes.messageDiv}>
        <Typography variant="subtitle1" gutterBottom>
          {error}
          {success}
        </Typography>
        <Button
          className={classes.button}
          style={whiteBackground}
          onClick={clickHandler}
          size="small"
        >
          Close
        </Button>
      </div>
    </Backdrop>
  );
};

export default Message;
