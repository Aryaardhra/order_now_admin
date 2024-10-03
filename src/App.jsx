import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"
import Add from "./pages/add/Add"
import List from "./pages/list/List"
import Order from "./pages/orders/Order"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const App = () => {

  const url = import.meta.env.VITE_API

  return (
    <>
    <ToastContainer />
    <Navbar />
    <hr />
    <div className="app-content">
      
      <Sidebar />
      <Routes>
       <Route path="/" element={<List url={url}/>} />
        <Route path="/add" element={<Add url={url}/>} />
        <Route path="/list" element={<List url={url}/>} />
        <Route path="/orders" element={<Order url={url}/>} />
      </Routes>
    </div>
    </>
  )
}

export default App