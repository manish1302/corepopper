import logo from './logo.svg';
import './App.css';
import SimplePopper from './SimplePopper';
import React from 'react';


function App() {

  const popoverContent = (
    <div>
      <p>This is a simple popover content.</p>
    </div>
  );

  return (
    <SimplePopper content={popoverContent} trigger="click" placement="bottom" className="custom-popover">
      <button>Click me</button>
    </SimplePopper>
  );

}

export default App;
