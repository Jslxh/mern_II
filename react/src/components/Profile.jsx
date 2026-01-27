import React from 'react'

const Profile = ({name,age,skill}) => {
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