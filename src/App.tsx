import React from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

import Dashboard from './components/Dashboard';

function App() {
  return (
    <Dashboard />
  );
}

export default hot(module)(App);