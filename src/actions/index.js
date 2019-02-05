import {
  ADD_MESSAGE,
  GET_USERS_LIST,
  MESSAGE_RECEIVED,
} from '../constants';

export const addMessage = ({ text, author }) => ({
  type: ADD_MESSAGE,
  text,
  author
});

export const messageReceived = (text, author) => ({
  type: MESSAGE_RECEIVED,
  text,
  author
});

export const populateUsersList = users => ({
  type: GET_USERS_LIST,
  users
});