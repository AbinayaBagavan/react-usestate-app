import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [fName, setValue] = useState('');
  const [LName, setLname] = useState('');
  const [myArray, setArray] = useState([]);
  const setNames = () => {
    let obj = {
      firstName: fName,
      LastName: LName
    };
    setArray([...myArray].concat(obj));
  };
  return (
    <div>
      <input
        type="text"
        value={fName}
        onChange={event => setValue(event.target.value)}
      />
      <input
        type="text"
        value={LName}
        onChange={e => setLname(e.target.value)}
      />
      <button onClick={setNames}>Submit</button>
      {myArray.map(item => (
        <div>
          <li class="firstName">{item.firstName}</li>
          <li class="LastName">{item.LastName}</li>
        </div>
      ))}
    </div>
  );
}
