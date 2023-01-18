import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Greeting from './component/greeting';

function App() {
  const message = useSelector(state => state.message.messages);
  console.log(message);
  return (
    <div className="App">
      <Greeting />
    </div>
  );
}

export default App;
