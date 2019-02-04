import { ADD_MESSAGE, MESSAGE_RECEIVED } from '../constants'

const messages = (state = [], action) => {
  switch (action.type) {
    case ADD_MESSAGE:
    case MESSAGE_RECEIVED:
      const messages = state.concat([{
        author: action.author,
        text: action.text,
      }]);

      if (messages.length > 20) {
        messages.shift();
      }

      return messages;
    default:
      return state
  }
}
  
export default messages