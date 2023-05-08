import React, { useState } from 'react'
import Nav from './Nav'
import Result from './Result';

const Search = () => {
  const [cdata, upData] = useState();
  const search = (e) => {
    upData(e.target.value)
  }
  return (
    <>
      <Nav />
      <div className='search'>
        <input type='text' onChange={search} placeholder='Search Anything' />
        <Result name={cdata} />
      </div>
    </>
  )
}

export default Search;