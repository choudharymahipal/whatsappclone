import React from 'react';
import { MainContainer } from './Components/maincontainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div>
        <div className='backgroundStrip'></div>
        <MainContainer />
      </div>
    </React.Fragment>

  );
}

export default App;
