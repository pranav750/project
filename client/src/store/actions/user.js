import * as API from "../api/user";
import * as constants from "../constants/constants";

export const signIn = (form) => async (dispatch) => {
  try {
    const response = await API.signIn(form);

    const userID = response.data.userID;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({ type: constants.SIGNIN, payload: userID });
  } catch (error) {
    dispatch({ type: constants.RESET_LOADING });

    const message = error?.response?.data?.message
      ? error.response.data.message
      : error.message;
    dispatch({ type: constants.SET_ERROR, payload: message });
  }
};

export const signUp = (form) => async (dispatch) => {
  try {
    const response = await API.signUp(form);

    const userID = response.data.userID;

    dispatch({ type: constants.RESET_LOADING });

    dispatch({ type: constants.SIGNUP, payload: userID });
  } catch (error) {
    dispatch({ type: constants.RESET_LOADING });

    const message = error?.response?.data?.message
      ? error.response.data.message
      : error.message;
    dispatch({ type: constants.SET_ERROR, payload: message });
  }
};

export const userDataIngestion = (form) => async (dispatch) => {
  try {
    const response = await API.userDataIngestion(form);

    dispatch({ type: constants.RESET_LOADING });

    dispatch({ type: constants.SET_SUCCESS, payload: response.data.message });
  } catch (error) {
    dispatch({ type: constants.RESET_LOADING });

    const message = error?.response?.data?.message
      ? error.response.data.message
      : error.message;
    dispatch({ type: constants.SET_ERROR, payload: message });
  }
};
