import React from 'react';
import './App.css';
import Users from './components/Users';
import Messages from './components/Messages';
import AddMessage from './components/AddMessage';

const users = ['Jack', 'Jill', 'James', 'John', 'Jane'];
const messages = [{
  text: 'Hi!',
  author: 'Jack'
}, {
  text: 'Hello!',
  author: 'Jill'
}];

const App = () => (
  <div id="chat">
    <Users users={users} />
    <section id="main">
      <Messages messages={messages} />
      <AddMessage />
    </section>
  </div>
);

export default App;