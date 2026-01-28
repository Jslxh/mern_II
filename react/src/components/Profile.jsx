import React from 'react'
import { useContext } from 'react'
import { userContext } from '../App'

const Profile = ({age,skill}) => {
    const name = useContext(userContext)
  return (
    <div>
        <h2>I am {name}, {age} years old.</h2>
        <ul>
            {skill.map((skill) =>{
                return <li>{skill}</li>
        })}
        </ul>
    </div>
  )
}

export default Profile