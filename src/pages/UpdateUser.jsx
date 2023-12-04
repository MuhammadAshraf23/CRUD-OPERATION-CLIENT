import React,{useState,useEffect} from 'react'
import { useNavigate,useParams } from "react-router-dom";
import axios from 'axios'
const UpdateUser = () => {
    const {id} = useParams();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get(`http://localhost:4000/getUser/${id}`)
    .then(res=>{
        setName(res.data.name)
        setEmail(res.data.email)
        setAge(res.data.age)
    })
    .catch(err=> console.log(err))
  },[])

  const Update = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/updateUser/${id}`, { name, email, age })
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
            <form onSubmit={Update}>
              <h2 className='text-center mb-4'>Update User</h2>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" className='form-control' placeholder='Enter your Name' value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" id="email" className='form-control' placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="age" className="form-label">Age</label>
                <input type="text" id="age" className='form-control' placeholder='Enter your Age' value={age} onChange={(e) => setAge(e.target.value)} />
              </div>
              <button type="submit" className='btn btn-success btn-block'>Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UpdateUser