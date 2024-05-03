import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm/>

  return(
    <ChatEngine
        height="100vh"  
        projectID="478efb28-aef9-4a5b-b252-4c76837824eb"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed ={(chatAppProps) => <ChatFeed { ...chatAppProps} />}
    />
  );
}

export default App