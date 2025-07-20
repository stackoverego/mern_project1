import { useState,useEffect } from 'react'
import './App.css'
import axios from "axios"
function App() {
  const [users,setusers]=useState([])
  const [name,setname]=useState()
  const [age,setage]=useState()

  const Sumbit=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:3001/createUser",{name,age}).
    then((users)=>{
      console.log(users)
    }).catch((err)=>{
      console.log(err);
  })
}

const deleteform=(e)=>{
  e.preventDefault();
  axios.delete("http://localhost:3001/deleteUser",{data: {name:name}})
  .then((users)=>{
    console.log(users)
  }).catch((err)=>{
      console.log(err);
  })
  }

  useEffect(()=>{
    axios.get("http://localhost:3001/getUsers").
    then((users)=>{
      setusers(users.data);
    }).catch((err)=>{
      console.log(err);
    })  
  },[])
  return (
    <div className='displaydiv'>
    <div className='heading'>
      <h2>FIRST MERN STACK PROJECT</h2>
    </div>
    <br /><br />
    {
  users.map(user => {
    return (
      <div key={user._id}>
        <h3>{user.name}</h3>
        <h3>{user.age}</h3>
      </div>
    );
  })
}

    <br />
    <h1>add new user</h1>
    <form action="" > 
      <input type="text" placeholder='enter the name here' onChange={(e)=>{setname(e.target.value)}}/>
      <input type="number"  placeholder='enter the age ' onChange={(e)=>{setage(e.target.value)}}/>
      <button onClick={Sumbit}>submit</button>
    </form>

    <h1>delete the user</h1>
    <form action="" >
      <input type="text" placeholder='enter the name here'onChange={(e)=>{setname(e.target.value)}}/>
      <button  onClick={deleteform}>delete</button> 
      </form>
    </div>

   
  );
}  

export default App;
