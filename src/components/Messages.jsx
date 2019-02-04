import React from 'react';
import PropTypes from 'prop-types';

const Messages = ({ messages = [] }) => (
  <section id="messages-list">
    <div>
      {messages.map(({ author, text }, index) => (
        <p key={index}>
          {author}: {text}
        </p>
      ))}
    </div>
  </section>
);

Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object)
};

export default Messages;