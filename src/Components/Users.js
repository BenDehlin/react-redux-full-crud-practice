import React, {Component} from 'react'
import '../App.css'
import {connect} from 'react-redux'
import {getUsers} from '../redux/userReducer'
import User from './User'

class Users extends Component{
  componentDidMount(){
    this.props.getUsers()
  }
  render(){
    const {userReducer} = this.props
    return (
      <div>
        {
          userReducer.users.map(element => (
            <User key={element.id} user={element} />
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {userReducer} = state
  return {
    userReducer
  }
}

const mapDispatchToProps = {
  getUsers
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)