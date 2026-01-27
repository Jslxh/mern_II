import React from 'react'
import Parent from '../components/Parent'
import State from '../hooks/State'
import Profile from '../components/Profile'
import Form from '../hooks/Form'

const Home = () => {
  return (
    <div>
    <div>App</div>
    <Form/>
    <br/>
    <Parent/>
    <br/>
    <State/>
    <br/>
    <Profile name="J" age = {20} skill = {["Python","HTML","CSS","MongoDB"]}/>
    </div>
  )
}

export default Home