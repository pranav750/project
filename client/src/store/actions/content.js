import * as API from "../api/content";
import * as constants from "../constants/constants";

export const getTopContent = () => async (dispatch) => {
  try {
    const response = await API.getTopContent();

    const books = response.data.books;
    console.log(books);
    dispatch({ type: constants.RESET_LOADING });

    dispatch({ type: constants.GET_TOP_CONTENT, payload: books });
  } catch (error) {
    dispatch({ type: constants.RESET_LOADING });

    const message = error?.response?.data?.message
      ? error.response.data.message
      : error.message;
    dispatch({ type: constants.SET_ERROR, payload: message });
  }
};

export const refreshTopContent = (form) => async (dispatch) => {
  try {
    const books = form.books.map((book) => {
      if (book._id === form.book._id) {
        return form.book;
      } else {
        return book;
      }
    });

    books.sort((firstBook, secondBook) => {
      if (firstBook.likes.length > secondBook.likes.length) {
        return -1;
      } else if (firstBook.likes.length < secondBook.likes.length) {
        return 1;
      } else {
        return 0;
      }
    });

    dispatch({ type: constants.GET_TOP_CONTENT, payload: books });
  } catch (error) {
    dispatch({ type: constants.RESET_LOADING });

    const message = error?.response?.data?.message
      ? error.response.data.message
      : error.message;
    dispatch({ type: constants.SET_ERROR, payload: message });
  }
};

export const contentDataIngestion = (form) => async (dispatch) => {
  try {
    const response = await API.contentDataIngestion(form);

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

export const likeBook = (form) => async (dispatch) => {
  try {
    const response = await API.likeBook(form);
  } catch (error) {
    dispatch({ type: constants.RESET_LOADING });

    const message = error?.response?.data?.message
      ? error.response.data.message
      : error.message;
    dispatch({ type: constants.SET_ERROR, payload: message });
  }
};

export const unlikeBook = (form) => async (dispatch) => {
  try {
    const response = await API.unlikeBook(form);
  } catch (error) {
    dispatch({ type: constants.RESET_LOADING });

    const message = error?.response?.data?.message
      ? error.response.data.message
      : error.message;
    dispatch({ type: constants.SET_ERROR, payload: message });
  }
};
