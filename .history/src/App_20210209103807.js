import { useState } from 'react';

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
      <h1>React App</h1>
      <p>Welcome</p>
    </div>
  );
}

export default App;
