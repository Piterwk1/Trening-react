import { useState } from 'react';

import './App.css';

function App() {
  // state = {
  //   name: 'Piotr',
  //   age: 41,
  // };

  const [name, setName] = useState('Piotr');
  const [age, setAge] = useState(41);

  const handleChange = (e) => setName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="app-content">
          <h1>My name is: {name}</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} />
            <button>Submit</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default App;
