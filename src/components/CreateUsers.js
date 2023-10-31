import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'

export default function CreateUsers() {

    const [inputs, setInputs] = useState({});

    const navigate = useNavigate();
    
    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    function handleSubmit(e) {
        e.preventDefault();

        axios.post("http://localhost:80/mysite/users/save", inputs).then((response) => {
            console.log(response.data);
            navigate("/");
        })
        console.log(inputs);
    }
  return (
    <div>
      <h1>Create Users</h1>
      <form onSubmit={handleSubmit}>
        <div>
        <label>Name</label>
        <input type='text' name='name' onChange={handleChange}/>
        </div>

        <div>
        <label>Email</label>
        <input type='email' name='email' onChange={handleChange}/>
        </div>

        <div>
        <label>Mobile</label>
        <input type='text' name='mobile' onChange={handleChange}/>
        </div>

        <button className='btn'>Save</button>
      </form>
    </div>
  )
}
