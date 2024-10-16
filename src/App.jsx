import React, { useReducer } from 'react';
import './App.css'

function App() {
  const mainNumber = 0;

  function reducer(state, action) {
    switch (action.type) {
      case 'typeCount':
        return state + action.value;
        case 'reset':
        return mainNumber;
        default:
        return state;
    }
  }

  const [count, dispatch] = useReducer(reducer, mainNumber);

  return (
   <div><br /><br /><br />
      <p className='count'>Count: {count}</p>
     <div className="container">
      <div className="btn" onClick={() => dispatch({ type: 'typeCount', value: +1 })}>
        <a href="#">+</a>
      </div>
      <div className="btn" onClick={() => dispatch({ type: 'typeCount', value: -1 })}>
        <a href="#">-</a>
      </div>
      <div className="btn" onClick={() => dispatch({ type: 'reset' })}>
          <a href="#">Reset</a>
      </div>
    </div>
   </div>
  );
}

export default App;
