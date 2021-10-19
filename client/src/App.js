import './App.css';
import React from 'react';
import { Route } from 'react-router';
import Home from './components/Home';
import Landing from './components/Landing';
import NavBar from './components/NavBar'
import Form from './components/Form'
//import Detail from './components'


function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={Landing}/>
      <Route path='/' component={NavBar}/>
      <Route path='/home' component={Home}/>
      <Route path='/add' component={Form}/>
      

    </div>
  );
}

export default App;
