import TextField from '@mui/material/TextField';
import * as React from 'react';
import { useState } from 'react';
import './App.css';
import NewSchedule from './NewSchedule';
import { ThemeProvider } from '@mui/material/styles';

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
      <h3>
        <div>Workout Program</div>
        <div>Enter Max(lbs)</div>
      </h3>
      <TextField size='small' value={inputText} onChange={handleChange} sx={{
        '& .MuiOutlinedInput-root': {
          backgroundColor: 'lightgrey',
          fontWeight: 'bold',
          fontFamily: 'Noto Serif',
        },
        '& input': {  // Targets the input element directly
          textAlign: 'center',
        },
        '& .MuiInputBase-input': { // For non-outlined variants
          textAlign: 'center',
        }
      }} />
      <p></p>
      {isValid && <NewSchedule value={inputText} />}
    </div>
  );
}

export default App;