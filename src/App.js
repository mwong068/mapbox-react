import React from 'react';
import Map from './components/Map';
import './App.css';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { store } from './redux/store'
import { setActiveOption } from './redux/action-creators'
import Toggle from './components/Toggle'
import Legend from './components/Legend'

function App() {
  return (
    <div className="App">
          <Map />
          <Toggle onChange={setActiveOption} />
          <Legend />
    </div>

    );
  }

export default App;
