import React from 'react'
import NavDropDown from './NavDropDown'

function Topbar() {
  return (
    <div className='flex place-content-between px-9 py-5'>
      <h1>Caleb Bellmyer</h1>
      {/* nav dropdown */}
      <NavDropDown />
    </div>
  )
}

export default Topbar