import React from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className='bg'>
      <Counter className='counter' count={1}></Counter>
    </div>
  );
}

export default App;
