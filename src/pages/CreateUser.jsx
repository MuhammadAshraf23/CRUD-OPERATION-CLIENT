import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/createUser", { name, email, age })
      .then((result) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className='container mt-5'>
    <div className='row justify-content-center'>
      <div className='col-md-6'>
        <div className='card bg-light'>
          <div className='card-body'>
            <form>
              <h2 className='text-center mb-4'>Add User</h2>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" className='form-control' placeholder='Enter your Name' onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className='form-control' placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input type="text" id="age" className='form-control' placeholder='Enter your Age' onChange={(e) => setAge(e.target.value)} />
              </div>
              <button type="submit" className='btn btn-success btn-block' onClick={submit}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default CreateUser;
