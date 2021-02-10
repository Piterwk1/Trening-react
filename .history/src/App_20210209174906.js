import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 },
    ],
  };

  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>

        {/* eslint-disable-next-line react/destructuring-assignment */}
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

// import Ninjas from './Ninjas';

// function App() {

//   return (
//     <div className="App">
//       <h1>React App</h1>
//       <p>Welcome</p>
//       <Ninjas name="Piotr" age={41} belt="black" />
//     </div>
//   );
// }

export default App;
