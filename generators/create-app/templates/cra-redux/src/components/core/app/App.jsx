import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import styles from './app.module.css'

/** This component gets mounted from the main index.js **/
class App extends Component {
  render() {
    return (
      <div className="app">
        <header >
          <h1 className={styles.header}> Atomic React App </h1>
          <Link className={styles.navlink} to="/">Home</Link>
          <Link className={styles.navlink} to="/about">About</Link>
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
