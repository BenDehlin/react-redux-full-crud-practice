import React from 'react'
import '../App.css'
import {Link, withRouter} from 'react-router-dom'

function Header(props){
  return(
    <div>
      <Link to='/'>Landing Page</Link>
      <Link to='/users'>Users</Link>
      <Link to='/form'>Create</Link>
    </div>
  )
}

export default withRouter(Header)