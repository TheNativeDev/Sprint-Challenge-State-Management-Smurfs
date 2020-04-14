import axios from "axios";

export const START_FETCHING = "START_FETCHING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const fetchSmurfs = () => dispatch => {
  dispatch({ type: START_FETCHING });

  axios
    .get("http://localhost:3333/smurfs")
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};

export const START_POSTING = "START_POSTING";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";
export const postSmurf = data => dispatch => {
  dispatch({ type: START_POSTING });

  axios
    .post("http://localhost:3333/smurfs", data)
    .then(res => console.log(res))
    .catch(err => dispatch({ type: POST_FAILURE, payload: err.response }));
};

export const START_PUTTING = "START_PUTTING";
export const PUT_SUCCESS = "PUT_SUCCESS";
export const PUT_FAILURE = "PUT_FAILURE";
export const putSmurf = (id, data) => dispatch => {
  dispatch({ type: START_PUTTING });

  axios
    .put(`http://localhost:3333/smurfs/${id}`, data)
    .then(res => console.log(res))
    .catch(err => dispatch({ type: PUT_FAILURE, payload: err.response }));
};

export const START_DELETING = "START_DELETING";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_FAILURE";
export const deleteSmurf = id => dispatch => {
  dispatch({ type: START_POSTING });

  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => console.log(res))
    .catch(err => dispatch({ type: DELETE_FAILURE, payload: err.response }));
};