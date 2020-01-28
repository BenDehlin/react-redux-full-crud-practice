import React from 'react'
import '../App.css'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteUser} from '../redux/userReducer'

const User = (props) => {
  console.log(props)
  const {id, name, age, email} = props.user
  const {deleteUser} = props
  return(
    <div>
      <h1>Name: {name}</h1>
      <h1>Age: {age}</h1>
      <h1>Email: {email}</h1>
      <button
        onClick = {() => {
          props.history.push(`/form/${id}`)
        }}
      >Edit</button>
      <button
        onClick = {() => {
          deleteUser(id)}}
      >Delete</button>
    </div>
  )
}

const mapDispatchToProps = {
  deleteUser
}

export default connect(null, mapDispatchToProps)(withRouter(User))