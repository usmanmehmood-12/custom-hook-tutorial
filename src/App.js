import { useState } from 'react';
import './App.css';
import useLocalStorage from './useLocalStorage';

function App() {
  const [name, setName] = useLocalStorage('name', '')
  return (
    <div className="App">
      <input value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
}

export default App;
