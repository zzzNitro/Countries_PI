import './App.css';
import React from 'react';
import { Route } from 'react-router';
import Home from './components/Home/';
import Landing from './components/Landing';
import NavBar from './components/NavBar/'
import Form from './components/ActivityForm/'
import CountryDetail from './components/CountryDetail'

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={Landing}/>
      <Route path='/home' component={NavBar}/>
      <Route exact path='/home' component={Home}/>
      <Route path='/countries/:id' component={CountryDetail}/>
      <Route path='/add' component={Form}/>
      

    </div>
  );
}

export default App;
