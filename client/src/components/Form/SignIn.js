import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import validator from "validator";
import { useDispatch } from "react-redux";
import { signIn } from "../../store/actions/user";
import { SET_LOADING } from "../../store/constants/constants";
import useStyles from "./styles";

const SignIn = ({ setToggleForm }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [signInForm, setSignInForm] = useState({
    userID: "",
    password: "",
  });

  const [error, setError] = useState({
    invalidUserID: false,
    invalidPassword: false,
  });

  const validatePassword = (password) => {
    if (validator.isStrongPassword(password)) {
      setError((prevState) => ({
        ...prevState,
        invalidPassword: false,
      }));
      return true;
    } else {
      setError((prevState) => ({
        ...prevState,
        invalidPassword: true,
      }));
      return false;
    }
  };

  const validateUserID = (userID) => {
    if (validator.isAlphanumeric(userID) && userID.length === 8) {
      setError((prevState) => ({
        ...prevState,
        invalidUserID: false,
      }));
      return true;
    } else {
      setError((prevState) => ({
        ...prevState,
        invalidUserID: true,
      }));
      return false;
    }
  };

  const inputHandler = (event) => {
    if (event.target.name === "password") {
      validatePassword(event.target.value);
    } else if (event.target.name === "userID") {
      validateUserID(event.target.value);
    }

    setSignInForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    dispatch({ type: SET_LOADING });

    dispatch(signIn(signInForm));
  };

  return (
    <form onSubmit={submitHandler}>
      <Typography variant="h5" gutterBottom>
        Sign In
      </Typography>
      <TextField
        error={error.invalidUserID}
        value={signInForm.userID}
        onChange={inputHandler}
        type="text"
        label="UserID"
        name="userID"
        margin="normal"
        helperText={
          error.invalidUserID
            ? "6 characters. May include number or alphabets."
            : ""
        }
        fullWidth
      />
      <br />
      <TextField
        error={error.invalidPassword}
        value={signInForm.password}
        onChange={inputHandler}
        type="password"
        label="Password"
        name="password"
        margin="normal"
        helperText={
          error.invalidPassword
            ? "Minimum 8 characters. At least 1 uppercase, 1 lowercase, 1 number and 1 symbol."
            : ""
        }
        fullWidth
      />
      <div className={classes.buttonContainer}>
        <Button
          disabled={
            error.invalidUserID ||
            error.invalidPassword ||
            signInForm.userID === "" ||
            signInForm.password === ""
          }
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
            setError({
              invalidUserID: false,
              invalidPassword: false,
            });
            setSignInForm({
              userID: "",
              password: "",
            });
          }}
        >
          Sign Up
        </Button>
      </div>
    </form>
  );
};

export default SignIn;
