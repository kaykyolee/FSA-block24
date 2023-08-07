import {useState } from 'react'
import {puppyList} from './data.js'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null)


function handleClick() {
    // some logic here
    console.log("puppy id: ", featPupId);
    }

  // console.log("puppyList: ", puppyList);

const featuredPup = puppies.find((pup)=> pup.id === featPupId)
console.log(featuredPup)

  return (
    <>
    <div className="App">
        {
          puppies.map((puppy) => {
            return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>;
          })
        }

    </div>
    {featPupId && (
        <div className="mainPup">
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}    

    </>
  )

}

export default App
