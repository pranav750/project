import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { SET_LOADING } from "../../store/constants/constants";
import useStyles from "./styles";
import { userDataIngestion } from "../../store/actions/user";

const User = ({ setToggleForm }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [file, setFile] = useState(null);

  const inputHandler = (event) => {
    setFile(event.target.files[0]);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    dispatch({ type: SET_LOADING });

    const formData = new FormData();
    formData.append("data", file);

    dispatch(userDataIngestion(formData));
  };

  return (
    <form onSubmit={submitHandler}>
      <Typography variant="h5" gutterBottom>
        User Ingestion
      </Typography>
      <TextField
        onChange={inputHandler}
        type="file"
        name="data"
        margin="normal"
        fullWidth
      />
      <div className={classes.buttonContainer}>
        <Button
          disabled={file === null ? true : false}
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            setToggleForm(false);
            setFile(null);
          }}
        >
          Content
        </Button>
      </div>
    </form>
  );
};

export default User;
