import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";
import "../sidebar/Sidebar.css";

const Sidebar = () => {
  return (
    <>
    <div className="sidebar">
        <div className="siderbar_options">
            <NavLink to="/add" className="siderbar_option">
                <img src={assets.add_icon} alt="add_icon" />
                <p>Add Items</p>
            </NavLink>
            <NavLink to="/list" className="siderbar_option">
                <img src={assets.order_icon} alt="order_icon" />
                <p>List Items</p>
            </NavLink>
            <NavLink to="/orders"className="siderbar_option">
                <img src={assets.add_icon} alt="add_icon" />
                <p>Orders</p>
            </NavLink>
        </div>
    </div>
    </>
  )
}

export default Sidebar