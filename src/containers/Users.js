import { connect } from 'react-redux'
import UsersComponent from '../components/Users'

const mapStateToProps = state => ({
  users: state.users
});
const mapDispatchToProps = {};

export const Users = connect(state => (mapStateToProps), mapDispatchToProps)(UsersComponent);
