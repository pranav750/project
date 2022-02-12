import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import validator from "validator";
import { useDispatch } from "react-redux";
import { signUp } from "../../store/actions/user";
import { SET_LOADING } from "../../store/constants/constants";
import useStyles from "./styles";

const SignUp = ({ setToggleForm }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    invalidEmail: false,
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

  const validateEmail = (email) => {
    if (validator.isEmail(email)) {
      setError((prevState) => ({
        ...prevState,
        invalidEmail: false,
      }));
      return true;
    } else {
      setError((prevState) => ({
        ...prevState,
        invalidEmail: true,
      }));
      return false;
    }
  };

  const inputHandler = (event) => {
    if (event.target.name === "password") {
      validatePassword(event.target.value);
    } else if (event.target.name === "email") {
      validateEmail(event.target.value);
    }

    setSignUpForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    dispatch({ type: SET_LOADING });

    dispatch(signUp(signUpForm));
  };

  return (
    <form onSubmit={submitHandler}>
      <Typography variant="h5" gutterBottom>
        Sign Up
      </Typography>
      <TextField
        error={error.invalidEmail}
        value={signUpForm.email}
        onChange={inputHandler}
        type="text"
        label="Email"
        name="email"
        margin="normal"
        helperText={error.invalidEmail ? "example@email.com" : ""}
        fullWidth
      />
      <br />
      <TextField
        error={error.invalidPassword}
        value={signUpForm.password}
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
            signUpForm.userID === "" ||
            signUpForm.password === ""
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
            setToggleForm(true);
            setError({
              invalidEmail: false,
              invalidPassword: false,
            });
            setSignUpForm({
              email: "",
              password: "",
            });
          }}
        >
          Sign In
        </Button>
      </div>
    </form>
  );
};

export default SignUp;
