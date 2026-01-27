import React from 'react'
import {useState} from 'react'

const State = () => {
    const [count,setCount] = useState(0);
    const [like,setLike] = useState(0);  return (
    <div>
        <h3>UseState Example</h3>
        <h4>Count: {count}</h4>
        <button onClick={()=>setCount(count+1)}>Inc</button>
        <button onClick={()=>setCount(count-1)}>Dec</button>

        <h3>Like</h3>
        <h4>Popularity: {like} </h4>
        <button onClick={()=> setLike(like+1)}>👍</button>
        <button onClick={()=>setLike(like-1)}>👎</button>
    </div>
  )
}

export default State