import { connect } from 'react-redux'
import AddMessageComponent from '../components/AddMessage'
import { addMessage } from '../actions'

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  addMessage,
};

export const AddMessage = connect(mapStateToProps, mapDispatchToProps)(AddMessageComponent)