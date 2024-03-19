import './App.css'
import Schedule from './Schedule'
import NewSchedule from './NewSchedule'
import CompanyLogo from './CompanyLogo.png'; // Import your custom icon

import { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [isValid, setIsValid] = useState(false);

  function handleChange(e) {
    setInputText(e.target.value);

    const regex = /^[0-9]+$/;
    const isValidInput = regex.test(e.target.value);
    setIsValid(isValidInput)
  }

  return (
    <div className="App-header">
      {/* <h1>
        <div>Workout Program</div>
        <div>Enter Max(lbs)</div>
      </h1> */}
      {/* <h2>
        <div>Workout Program</div>
        <div>Enter Max(lbs)</div>
      </h2> */}
      <h3>
        <div>Workout Program</div>
        <div>Enter Max(lbs)</div>
      </h3>
      <input className='input' value={inputText} onChange={handleChange} />
      <p></p>
      {/* {isValid && <Schedule value={inputText} />} */}
      {isValid && <NewSchedule value={inputText} />}
    </div>
  );
}

export default App;