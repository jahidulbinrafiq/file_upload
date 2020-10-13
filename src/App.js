import React from 'react';
import './App.css';
import DisplayImage from './Components/DisplayImage';
import FileUpload from './Components/FileUpload';

function App() {
  return (
    <div className="App container">
      <FileUpload/>
      <DisplayImage/>
    </div>
  );
}

export default App;
