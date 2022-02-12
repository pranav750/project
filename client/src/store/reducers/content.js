import * as constants from "../constants/constants";

const initialState = {
  books: [],
};

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_TOP_CONTENT:
      return {
        ...state,
        books: action.payload,
      };

    default:
      return state;
  }
};

export default contentReducer;
