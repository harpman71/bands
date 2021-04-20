import React from 'react';
import './App.css';
import Artists from './components/Artists';
  

const App = () => 
    (
    <div className="App">                
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">            
            <Artists/>            
        </div>          
    </div>
    );


export default App;
