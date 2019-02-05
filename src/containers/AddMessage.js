import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import AddMessageComponent from '../components/AddMessage'
import { addMessage } from '../actions'

const mapStateToProps = () => ({
  initialValues: {
    author: 'Me'
  }
});
const mapDispatchToProps = {
  onSubmit: addMessage
};

export const AddMessage = compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'addMessage' }),
)(AddMessageComponent);
