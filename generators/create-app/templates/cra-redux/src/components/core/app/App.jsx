import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'

/** This component gets mounted from the main index.js **/
class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1> Atomic React App </h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </header>
        {/* Routes */}
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </main>
      </div>
    );
  }
}

export default App;
