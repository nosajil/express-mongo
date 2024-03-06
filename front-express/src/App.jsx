import './App.css'
import axios from 'axios'
import {useState} from 'react'

function App() {
  const [users, setUsers] = useState()

  const apiCall = async () => {
    try {
      const response = await axios.get('http://localhost:3003/users')
      setUsers(response.data);
      console.log(users);
    } catch (error) {
      console.log(error.message);
    }
  }

  apiCall()

  return (
    <>
      <h1>Hello world</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti dolore eaque architecto voluptatibus laborum fugit accusantium eius a tenetur laudantium atque amet laboriosam dicta ab aspernatur nostrum, dolorem, pariatur voluptas?</p>
    </>
  )
}

export default App
