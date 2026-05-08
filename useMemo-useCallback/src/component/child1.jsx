
import React, { useEffect,memo } from 'react'

function Child1({name,fn}) {
    
    useEffect(()=>{
        console.log("child 1 re-render")
    })
  return (
    <>Child1
    <p>Name: {name}</p>
    <button onClick={fn}>changeName</button>
    </>
  )
}

export default memo(Child1)