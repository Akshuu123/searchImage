import React from 'react';
import './App.css';
import { Routes ,  Route } from 'react-router-dom';
import Search from './Component/Search/Search';
import Error from './Component/Search/Error';


const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/search' Component={Error}>Search</Route>
        <Route exact path='*' Component={Search}>Error</Route>
      </Routes>
    </>
  )
}

export default App;