import React from 'react';
import './App.css';
import { Users } from './containers/Users';
import { Messages } from './containers/Messages';
import { AddMessage } from './containers/AddMessage';

const App = () => (
  <div id="chat">
    <Users />
    <section id="main">
      <Messages />
      <AddMessage />
    </section>
  </div>
);

export default App;