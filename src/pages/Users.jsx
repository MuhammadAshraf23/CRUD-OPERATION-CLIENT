import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './user.css'
const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000")
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:4000/deleteUser/${id}`)
      .then(res => {
        console.log(res.data);
        // Update local state by filtering out the deleted user
        setUsers(prevUsers => prevUsers.filter(user => user._id !== id));
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='container mt-5'>
      <div className='row justify-content-center'>
        <div className='col-md-8'>
          <div className='card Arikaz'>
            <div className='card-body'>
              <Link to="/create" className='btn btn-success mb-3'>Add +</Link>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    users.map((user) => (
                      <tr key={user._id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>
                          <Link to={`/update/${user._id}`} className='btn btn-success'>Update</Link>
                          <button className='btn btn-danger'style={{paddingLeft:'18px'}} onClick={() => handleDelete(user._id)}>Delete</button>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
