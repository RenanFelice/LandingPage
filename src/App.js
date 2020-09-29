import React from 'react';
import styles from './App.module.css';
import Navbar from './components/Navbar';
import { Route, Switch } from "react-router-dom";
import Home from './components/pages/Home';


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Switch>
      <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
