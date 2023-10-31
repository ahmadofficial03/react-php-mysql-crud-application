import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUsers() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        axios.get(`http://localhost/mysite/user/${id}`).then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`http://localhost/mysite/${id}/edit`, inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
        
    }
    return (
      <div>
      <h1>Create Users</h1>
      <form onSubmit={handleSubmit}>
        <div>
        <label>Name</label>
        <input type='text' name='name' onChange={handleChange} value={inputs.name}/>
        </div>

        <div>
        <label>Email</label>
        <input type='email' name='email' onChange={handleChange} value={inputs.email}/>
        </div>

        <div>
        <label>Mobile</label>
        <input type='text' name='mobile' onChange={handleChange} value={inputs.mobile}/>
        </div>

        <button className='btn'>Save</button>
      </form>
    </div>
    )
}