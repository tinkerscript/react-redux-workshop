import React from 'react';
import { Field } from 'redux-form';

export default class AddMessage extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  onKeyPress = e => {
    if (e.key === 'Enter') {
      this.props.handleSubmit();
      this.props.reset();
      e.preventDefault();
    };
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <section id="new-message">
          <Field name="text" component="input" type="text" ref={this.input} onKeyPress={this.onKeyPress} />
        </section>
      </form>
    );
  }
}