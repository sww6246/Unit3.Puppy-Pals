import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'

function App() {
  console.log(puppyList)
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)

  function handleClick(id) {
    // some logic here
    setFeatPupId(id)
  }

  const featuredPuppy = puppies.find((puppy) => puppy.id === featPupId)

  return (
    <>
      <div>
        <h1>Puppies!</h1>
        <h3>Click a puppy below to learn more: </h3>
      </div>
      <div id="puppy-container">
        {puppies.map((puppy) => (
          <p 
            onClick={() => handleClick(puppy.id)} 
            key={puppy.id} class="puppy"
          >
            {puppy.name}
          </p>
        ))}
        </div>
        
        <div id="featured-pup">
        <h2>Featured Pup:</h2>
        {featPupId && <p>Featured Puppy ID: {featPupId}</p>}

        {featuredPuppy && (
          <div>
            <h2>{featuredPuppy.name}</h2>
            <p>Age: {featuredPuppy.age}</p>
            <p>Email: {featuredPuppy.email}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default App
