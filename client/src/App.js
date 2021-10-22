import './App.css';
import React from 'react';
import { Route } from 'react-router';
import Home from './components/Home/';
import Landing from './components/Landing';
import NavBar from './components/NavBar/'
import CountryDetail from './components/CountryDetail'
import PostActivity from './components/ActivityForm/index';

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={Landing}/>
      <Route path='/home' component={NavBar}/>
      <Route exact path='/home' component={Home}/>
      <Route path='/countries/:id' component={CountryDetail}/>
      <Route path='/addActivity' component={PostActivity}/>
      

    </div>
  );
}

export default App;
