import { GET_USERS_LIST } from '../constants';

const users = (state = [], action) => {
  switch (action.type) {
    case GET_USERS_LIST:
      return action.users
    default:
      return state
  }
}

export default users