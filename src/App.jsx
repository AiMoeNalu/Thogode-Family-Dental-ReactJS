import "./App.scss";

import { React, Component } from "react";
import HomePage from './Pages/Home/Home';

class App extends Component {
  render() {
    return (
    <div className="container" id='master'>
      <HomePage/>
    </div>
    );
  }
}

export default App;
