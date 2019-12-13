import {
    START_FETCHING,
    FETCH_FAILURE,
    FETCH_SUCCESS,
    START_POSTING,
    POST_FAILURE,
    POST_SUCCESS,
    START_PUTTING,
    PUT_FAILURE,
    PUT_SUCCESS,
    START_DELETING,
    DELETE_FAILURE,
    DELETE_SUCCESS
  } from "../actions";
  
  const initialState = {
    smurfs: [],
    isFetching: false,
    isPosting: false,
    isUpdating: false,
    isDeleting: false,
    error: null
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case START_FETCHING:
        return { ...state, isFetching: true, error: null };
      case FETCH_SUCCESS:
        return { ...state, isFetching: false, smurfs: action.payload };
      case FETCH_FAILURE:
        return { ...state, isFetching: false, error: action.payload };
      case START_POSTING:
        return { ...state, isPosting: true };
      case POST_SUCCESS:
        return { ...state, isPosting: false };
      case POST_FAILURE:
        return { ...state, isPosting: false, error: action.payload };
      case START_PUTTING:
        return { ...state, isUpdating: true };
      case PUT_SUCCESS:
        return { ...state, isUpdating: false };
      case PUT_FAILURE:
        return { ...state, isUpdating: false, error: action.payload };
      case START_DELETING:
        return { ...state, isDeleting: true };
      case DELETE_SUCCESS:
        return { ...state, isDeleting: false };
      case DELETE_FAILURE:
        return { ...state, isDeleting: false, error: action.payload };
      default:
        return state;
    }
  };