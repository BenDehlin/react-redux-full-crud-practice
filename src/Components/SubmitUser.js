import React, {Component} from 'react'
import '../App.css'
import {connect} from 'react-redux'
import {getUser} from './../redux/userReducer'
import {postUser} from './../redux/userReducer'
import {putUser} from './../redux/userReducer'

class SubmitUser extends Component{
  constructor(props){
    super(props)
    this.state = {
      id: '',
      name: '',
      age: '',
      email: '',
      edit: false
    }
  }
  componentDidMount(){
    const {id} = this.props.match.params
    if(id){
      const {getUser, user} = this.props
      getUser(id)
      const {name, age, email} = user
      this.setState({id, name, age, email, edit: true})
    }
  }

  componentDidUpdate(prevProps){
    const {id} = this.props.match.params
    if(!id && this.props !== prevProps){
      this.setState({id: '', name: '', age: '', email: '', edit: false})
    }
    //TROUBLESHOOTING NEEDED
    // else if(id && this.props !== prevProps){
    //   console.log(this.props, prevProps)
    //   const {getUser, user} = this.props
    //   getUser(id)
    //   const {name, age, email} = user
    //   this.setState({id, name, age, email, edit: true})
    // }
  }

  handleChange = ({name, value}) => this.setState({[name]: value})

  handleSubmit(submitType){
    const {id, name, age, email} = this.state
    if(submitType === 'post'){
      console.log('hit')
      const {postUser} = this.props
      postUser({name, age, email})
    }else if(submitType === 'put'){
      const {putUser} = this.props
      putUser({id, name, age, email})
    }
    this.props.history.push('/users')
    this.setState({id: '', name: '', age: '', email: '', edit: false})
  }

  render(){
    const {name, age, email, edit} = this.state
    return(
      <div>
        <input
          name='name'
          value={name}
          placeholder='enter name'
          onChange={(e) => this.handleChange(e.target)}
        />
        <input
          name='age'
          value={age}
          placeholder='enter age'
          onChange={(e) => this.handleChange(e.target)}
        />
        <input
          name='email'
          value={email}
          placeholder='enter email'
          onChange={(e) => this.handleChange(e.target)}
        />
        <button>Cancel</button>
        {edit ? 
        <button
          onClick = {() => this.handleSubmit('put')}
        >Edit</button> : 
        <button
          onClick = {() => this.handleSubmit('post')}
        >Create New</button>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
}

const mapDispatchToProps = {
  getUser,
  postUser,
  putUser
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitUser)