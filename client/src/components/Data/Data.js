import { useState } from "react";
import { Paper } from "@mui/material";
import User from "./User";
import Content from "./Content";
import useStyles from "./styles";

const Data = () => {
  const classes = useStyles();

  const [toggleForm, setToggleForm] = useState(false);

  return (
    <Paper className={classes.paper} elevation={3}>
      {toggleForm ? (
        <User setToggleForm={setToggleForm} />
      ) : (
        <Content setToggleForm={setToggleForm} />
      )}
    </Paper>
  );
};

export default Data;
