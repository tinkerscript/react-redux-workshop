import React from 'react';

export default class AddMessage extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  onKeyPress = e => {
    const { addMessage } = this.props;

    if (e.key === 'Enter') {
      addMessage(this.input.current.value, 'Me')
      this.input.current.value = '';
    };
  }

  render() {
    return (
      <section id="new-message">
        <input type="text" ref={this.input} onKeyPress={this.onKeyPress} />
      </section>
    );
  }
}