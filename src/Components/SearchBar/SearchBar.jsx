
import React from 'react'
import { useState } from 'react'

const SearchBar = () => {
    const [name, setName] = useState("")



  return (
    <div>
        <input type="text" placeholder='buscar' name='name'  onChange={(e) => {console.log(e.target.value)}}  />
        <button type='submit'>Buscar</button>
    </div>
  )
}

export default SearchBar