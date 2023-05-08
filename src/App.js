import React from 'react';
import './App.css';
import { Routes ,  Route } from 'react-router-dom';
import Search from './Component/Search/Search';
import Error from './Component/Search/Error';


const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/Search' Component={Search}>Search</Route>
        <Route exact path='*' Component={Error}>Error</Route>
      </Routes>
    </>
  )
}

export default App;