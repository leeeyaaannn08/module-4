import {useState} from 'react'

function About() {
    const [count, setCount] = useState(0)

  return (
    <div>
        <h1>About</h1>
        <h2>{count}</h2>
        <button type='button' onClick={()=> setCount(prevCount => prevCount + 1)} >+</button>
        <button type='button' onClick={()=> setCount(prevCount => prevCount - 1)} >-</button>

    </div>
  )
}

export default About