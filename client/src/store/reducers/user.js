import * as constants from "../constants/constants";

const initialState = {
  userID: null,
  error: null,
  success: null,
  loading: false,
};

const storedData = localStorage.getItem("profile")
  ? JSON.parse(localStorage.getItem("profile"))
  : initialState;

const userReducer = (state = storedData, action) => {
  switch (action.type) {
    case constants.SIGNIN:
      localStorage.setItem(
        "profile",
        JSON.stringify({
          ...state,
          userID: action.payload,
        })
      );
      return {
        ...state,
        userID: action.payload,
      };

    case constants.SIGNUP:
      localStorage.setItem(
        "profile",
        JSON.stringify({
          ...state,
          userID: action.payload,
        })
      );
      return {
        ...state,
        userID: action.payload,
      };

    case constants.LOGOUT:
      localStorage.removeItem("profile");
      return {
        ...state,
        userID: null,
      };

    case constants.SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case constants.RESET_LOADING:
      return {
        ...state,
        loading: false,
      };

    case constants.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case constants.RESET_ERROR:
      return {
        ...state,
        error: null,
      };

    case constants.SET_SUCCESS:
      return {
        ...state,
        success: action.payload,
      };

    case constants.RESET_SUCCESS:
      return {
        ...state,
        success: null,
      };

    default:
      return state;
  }
};

export default userReducer;
