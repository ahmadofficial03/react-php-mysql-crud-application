import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListUsers() {
    const [users, setUsers] = useState([]); 
    const [loading, setLoading] = useState(false);


    useEffect(function() {
        getUsers();
    }, []);

    function getUsers() {
        setLoading(true);
        axios.get('http://localhost/mysite/users/').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
            setLoading(false);
        });
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost/mysite/user/${id}/delete`).then(function(response){
            console.log(response.data);
            getUsers();
        });
    }

    return (
        <div>
        <h1>List Users</h1>
        {loading && <h1>Loading...</h1>}
        <table style={{margin: "auto", padding: "1rem 2rem"}}>
                <thead style={{padding: "10px 0"}}>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.mobile}</td>
                            <td>
                                <Link to={`user/${user.id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                    
                </tbody>
            </table>
    </div>
    );
}