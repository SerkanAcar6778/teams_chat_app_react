import {ChatEngine} from 'react-chat-engine';
import './App.css';
//import ChatFeed from './components/ChatFeed';

const App = ()=> {

  return (
    <ChatEngine
      height="100vh"
      projectID="0368c19b-fef6-4c5d-b75e-ca2d2ffb63b9"
      userName= 'Serkan..'
      userSecret= '111222'
//      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
      />
  );
}

export default App;