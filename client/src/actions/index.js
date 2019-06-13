import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';

export const fetchUser = () => async dispatch => {
  //We're requesting information from our backend so we use axios.get
  let res = await axios.get('/api/current_user');
  //When you dispatch the action FETCH_USER and that contains a payload of the user model,
  //the auth reducer will automatically pick it up and in theory anything inside of the application
  //that depends upon the user model, will be automatically updated
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async dispatch => {
  //We're sending information to the backend, so we use axios.post
  const res = await axios.post('/api/stripe', token);
  //We call the exact same action type as before, to automatically update the whole user
  dispatch({ type: FETCH_USER, payload: res.data });
}

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  history.push('/surveys')
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');

  dispatch({ type: FETCH_SURVEYS, payload: res.data});
};