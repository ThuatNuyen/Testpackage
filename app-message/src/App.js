import React from 'react';

import ConversationList from './components/ConversationList';
import MessageList from './components/MessageList';
import './App.css';

function App() {
  return (
    // <div className="App">
    <div className="messenger">
      <div className="scrollable sidebar">
        <ConversationList />
      </div>

      <div className="scrollable content">
        <MessageList />
      </div>
    </div>
    // </div>
  );
}

export default App;
