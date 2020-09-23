import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="col">
        <h2>DANCE</h2>
        <div className="caption">
          <p>Strength does not come from the physical capacity. It comes from an indomitable will.</p>
          <button type='button'>Know More</button>
        </div>
      
        <img src={require('./assets/img1.png')} alt=""/>
      </div>

      <div className="col">
        <h2>GYM</h2>
        <div className="caption">
          <p>Strength does not come from the physical capacity. It comes from an indomitable will.</p>
          <button type='button'>Know More</button>
        </div>
       
        <img src={require('./assets/img2.png')} alt=""/>
      </div>

      <div className="col">
        <h2>YOGA</h2>
        <div className="caption">
          <p>Strength does not come from the physical capacity. It comes from an indomitable will.</p>
          <button type='button'>Know More</button>
        </div>
    
        <img src={require('./assets/img3.png')} alt=""/>
      </div>
    </div>
  );
}

export default App;
