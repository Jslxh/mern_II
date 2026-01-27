import React from 'react'

const Child = ({send}) => {
  return (
    <div>
        <button onClick = {() => send("Annyeongasheyo!")}>
            send Data
        </button>
    </div>
  )
}

export default Child