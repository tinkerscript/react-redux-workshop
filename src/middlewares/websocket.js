import { ADD_MESSAGE, GET_USERS_LIST } from '../constants';
import { messageReceived, populateUsersList } from '../actions';

export const createWebsocketMiddleware = () => store => {
  const socket = new WebSocket('ws://172.23.2.65:3219')

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);

    switch (data.type) {
      case ADD_MESSAGE:
        store.dispatch(messageReceived(data.text, data.author));
        break;
      case GET_USERS_LIST:
        store.dispatch(populateUsersList(data.users));
        break;
      default:
        break;
    }
  }

  return next => action => {
    switch (action.type) {
      case ADD_MESSAGE:
        socket.send(JSON.stringify(action));
        break;
      default:
        break;
    }
    next(action);
  };
};