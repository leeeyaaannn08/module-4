import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
    <form>
      <label>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>    
    </div>
  )
}

export default Footer