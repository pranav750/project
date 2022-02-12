import { useState } from "react";
import { Paper } from "@mui/material";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import useStyles from "./styles";

const Form = () => {
  const classes = useStyles();

  const [toggleForm, setToggleForm] = useState(false);

  return (
    <Paper className={classes.paper} elevation={3}>
      {toggleForm ? (
        <SignIn setToggleForm={setToggleForm} />
      ) : (
        <SignUp setToggleForm={setToggleForm} />
      )}
    </Paper>
  );
};

export default Form;
