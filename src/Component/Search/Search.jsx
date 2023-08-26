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
      <Nav/>
      <div className='search'>
        <input type='text' onChange={search} value={cdata} placeholder='Search Any Image' />
        <Result name={cdata}/>
      </div>
    </>
  )
}

export default Search;