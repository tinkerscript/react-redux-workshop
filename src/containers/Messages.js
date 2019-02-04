import { connect } from 'react-redux'
import MessagesComponent from '../components/Messages'

const mapStateToProps = state => ({ messages: state.messages || [] });
const mapDispatchToProps = {};

export const Messages = connect(mapStateToProps, mapDispatchToProps)(MessagesComponent);