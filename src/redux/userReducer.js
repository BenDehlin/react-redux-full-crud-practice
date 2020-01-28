import axios from 'axios'

const initialState = {
  users: [],
  user: {id: '', name: '', age: '', email: ''},
  loading: false,
  errorMessage: ''
}

const GET_USERS = 'GET_USERS'
const GET_USER = 'GET_USER'
const DELETE_USER = 'DELETE_USER'
const POST_USER = 'POST_USER'
const PUT_USER = 'PUT_USER'
const PENDING = '_PENDING'
const FULFILLED = '_FULFILLED'
const REJECTED = '_REJECTED'

export function getUsers(){
  const users = axios.get('http://localhost:3333/api/users').then(results =>{
    return results.data})
  .catch(err => err.message)
  return{
    type: GET_USERS,
    payload: users
  }
}

export function getUser(id){
  const user = axios.get(`http://localhost:3333/api/users/${id}`).then(results =>{
    return results.data[0]
  }).catch(err => err.message)
  return {
    type: GET_USER,
    payload: user
  }
}

export function postUser(body){
  console.log(body)
  const users = axios.post('http://localhost:3333/api/users', body).then(results => {
    return results.data
  }).catch(err => err.message)
  return {
    type: POST_USER,
    payload: users
  }
}

export function putUser(body){
  const {id} = body
  const users = axios.put(`http://localhost:3333/api/users/${id}`, body).then(results => {
    return results.data
  }).catch(err => err.message)
  return {
    type: PUT_USER,
    payload: users
  }
}

export function deleteUser(id){
  const users = axios.delete(`http://localhost:3333/api/users/${id}`).then(results => results.data)
  .catch(err => err.message)
  return {
    type: DELETE_USER,
    payload: users
  }
}

export default function userReducer(state = initialState, action){
  const {type, payload} = action
  switch(type){
    case GET_USERS + PENDING:
      return {...state, loading: true}
    case GET_USERS + FULFILLED:
      return {...state, users: payload, loading: false}
    case GET_USERS + REJECTED:
      return {...state, errorMessage: payload, loading: false}
    case GET_USER + PENDING:
      return {...state, loading: true}
    case GET_USER + FULFILLED:
      return {...state, user: payload, loading: false}
    case GET_USER + REJECTED:
      return {...state, errorMessage: payload, loading: false}
    case POST_USER + PENDING:
      return {...state, loading: true}
    case POST_USER + FULFILLED:
      return {...state, users: payload, loading: false}
    case POST_USER + REJECTED:
      return {...state, errorMessage: payload, loading: false}
    case PUT_USER + PENDING:
      return {...state, loading: true}
    case PUT_USER + FULFILLED:
      return {...state, users: payload, user: {id: '', name: '', age: '', email: ''}, loading: false}
    case PUT_USER + REJECTED:
      return {...state, errorMessage: payload, loading: false}
    case DELETE_USER + PENDING:
      return {...state, loading: true}
    case DELETE_USER + FULFILLED:
      return {...state, users: payload, loading: false}
    case DELETE_USER + REJECTED:
      return {...state, errorMessage: payload}
    default:
      return state
  }
}