import './App.css';
import { useEffect, useRef, useState } from 'react'
import newSocket from './socket'
function App() {
  const userRef = useRef()
  const [users, setUsers] = useState([])  
  useEffect(() => { 
    
    newSocket.on("user:new", (data) => {
      console.log(data)
      setUsers(state => [...state, data.name])
    })
  } , [])

  const handleAddUser =(e) => {
    e.preventDefault()
    // console.log(userRef.current.value)
    newSocket.emit("user:add_to_server", { name: userRef.current.value})
  }
  return (
    <div className="App">
        <div className="container">
            <div>
              <h1>User add</h1>
              <input ref={userRef} type="text" />
              <button onClick ={handleAddUser}> Add </button>
            </div>
            <div>
              <h1>Ro'yxat</h1>
               {
                 users.length > 0 ? users.map((user, key) => {
                   return (
                   <div className="user-item" key={key}> 
                      {key} - {user}
                   </div>)
                 }) : "No users found"
               }
            </div>
        </div>
    </div>
  );
}

export default App;
