import React from 'react'
import Parent from '../components/Parent'
import State from '../hooks/State'                 
import Profile from '../components/Profile'
import Form from '../hooks/Form'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { userContext } from '../App'

const Home = () => {
    const [user,setUser] = useState("abcd")
  return (
    <div>
    <Link to ={'/form'}>Form</Link><br/>
    <Link to ={'/state'}>UseState Example</Link><br/>
    <Link to ={'/reducer'}>UseReducer Example</Link><br/>
    <userContext.Provider value = {user}>
        <Profile 
        age = {20} 
        skill = {["Python","HTML","CSS","MongoDB"]}
        />
    </userContext.Provider>
    <Parent/>
    </div>
  )
}

export default Home