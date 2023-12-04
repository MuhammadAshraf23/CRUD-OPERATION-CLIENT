import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateUser from "./pages/CreateUser"
import UpdateUser from "./pages/UpdateUser"
import Users from "./pages/Users"
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  
  return(
    <>
<BrowserRouter>
<Routes>
<Route path="/" element={<Users />}/>
<Route path="/create" element={<CreateUser />}/>
<Route path="/update/:id" element={<UpdateUser />}/>

</Routes>
</BrowserRouter>
    
    </>
  )
}

export default App
