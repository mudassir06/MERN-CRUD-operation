import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateStudent = () => {
    const [name, setName]=useState('')
const [email,setEmail]=useState('')
const {id} =useParams();
const navigate=useNavigate();
const handleNameChange=(e)=>{
    setName(e.target.value);
}
const handleEmailChange=(e)=>{
    setEmail(e.target.value);
}
const handleSubmit=(e)=>{
    e.preventDefault();
    axios.put(`http://localhost:3002/update/${id}`, { name, email })
    .then(res=>{
        console.log(res);
        navigate("/")
        alert("Student added")
    })
    .catch(err=>console.log(err));
}
  return (
 <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
<div className="w-50 bg-white rounded p-3">
    <form onSubmit={handleSubmit}>
        <h2>Update student</h2>
        <div className="mb-2">
            <label htmlFor="">Name</label>
            <input type="text" placeholder='name' className='form-control' 
            // onChange={e=>setName(e.target.value)} or
            onChange={handleNameChange}
            />
        </div>
        <div className="mb-2">
            <label htmlFor="">Email</label>
            <input type="email" placeholder='Email' className='form-control' 
            onChange={handleEmailChange}/>
        </div>
        <button className='btn btn-success'>Update</button>
    </form>
</div>
 </div>
  )
}

export default UpdateStudent
